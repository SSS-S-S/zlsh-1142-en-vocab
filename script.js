let notebook = [];
let selectedUnits = ["1"];
let waitingQueue = [];
let currentWord = null;
let isNoteMode = false;
let isChecked = false;

let learningModeTemp = null;
let learningModeChecked = false;

window.onload = function() {
    init();
};

function init() {
    if (typeof vocabData === 'undefined') return;

    notebook = JSON.parse(localStorage.getItem('v_note')) || [];
    selectedUnits = (JSON.parse(localStorage.getItem('v_units')) || ["1"]).map(String);
    
    isNoteMode = localStorage.getItem('v_isNoteMode') === 'true';
    isChecked = localStorage.getItem('v_isChecked') === 'true';
    
    const savedQueueNames = JSON.parse(localStorage.getItem('v_queue')) || [];
    const savedCurrentName = localStorage.getItem('v_current_str');
    const savedTempName = localStorage.getItem('v_temp_str');
    learningModeChecked = localStorage.getItem('v_temp_isChecked') === 'true';

    waitingQueue = savedQueueNames.map(name => vocabData.find(v => v.word === name)).filter(Boolean);
    currentWord = savedCurrentName ? vocabData.find(v => v.word === savedCurrentName) : null;
    learningModeTemp = savedTempName ? vocabData.find(v => v.word === savedTempName) : null;

    renderUnits();
    updateModeUI();

    if (!isNoteMode && !currentWord && waitingQueue.length === 0) {
        refreshQueue();
    }

    if (currentWord) {
        renderUI();
        if (isChecked) showResult(false);
    } else {
        nextQuestion();
    }

    updateProgress();
}

function save() {
    localStorage.setItem('v_queue', JSON.stringify(waitingQueue.map(v => v.word)));
    localStorage.setItem('v_units', JSON.stringify(selectedUnits));
    localStorage.setItem('v_note', JSON.stringify(notebook));
    localStorage.setItem('v_current_str', currentWord ? currentWord.word : "");
    localStorage.setItem('v_isChecked', isChecked);
    localStorage.setItem('v_isNoteMode', isNoteMode);
    
    localStorage.setItem('v_temp_str', learningModeTemp ? learningModeTemp.word : "");
    localStorage.setItem('v_temp_isChecked', learningModeChecked);
    
    updateProgress();
}

function refreshQueue() {
    const pool = vocabData.filter(d => selectedUnits.includes(String(d.level)));
    waitingQueue = [...pool].sort(() => Math.random() - 0.5);
    save();
}

function nextQuestion() {
    isChecked = false;
    let pool = isNoteMode ? notebook : waitingQueue;
    
    if (pool.length === 0) {
        if (isNoteMode) {
            alert("收藏本是空的！");
            toggleNoteMode();
            return;
        }
        refreshQueue();
        pool = waitingQueue;
    }

    if (isNoteMode) {
        currentWord = pool[Math.floor(Math.random() * pool.length)];
    } else {
        currentWord = waitingQueue.shift();
    }
    
    save();
    renderUI();
}

function renderUI() {
    if(!currentWord) return;
    document.getElementById('q-pos').innerText = currentWord.pos;
    document.getElementById('q-chinese').innerText = currentWord.ch;
    const input = document.getElementById('user-input');
    input.value = ''; input.disabled = false;
    document.getElementById('feedback-area').style.display = 'none';
    document.getElementById('action-btn').innerText = 'Confirm';
    updateStarUI();
    setTimeout(() => input.focus(), 50);
}

function handleAction() {
    if (!currentWord) return;
    if (!isChecked) {
        const input = document.getElementById('user-input');
        const isCorrect = input.value.trim().toLowerCase() === currentWord.word.toLowerCase();
        showResult(true, isCorrect);
    } else {
        nextQuestion();
    }
}

function showResult(recordHistory, isCorrect = true) {
    isChecked = true;
    document.getElementById('feedback-area').style.display = 'block';
    const wordEl = document.getElementById('ans-word');
    wordEl.innerText = currentWord.word;
    
    if (recordHistory) {
        wordEl.style.color = isCorrect ? 'var(--correct)' : 'var(--wrong)';
        addHistory(currentWord.word, isCorrect);
    } else {
        wordEl.style.color = 'var(--accent)';
    }

    document.getElementById('ans-ex-en').innerText = currentWord.example_en;
    document.getElementById('ans-ex-ch').innerText = currentWord.example_ch;
    document.getElementById('user-input').disabled = true;
    document.getElementById('action-btn').innerText = 'Next';
    save();
}

function toggleNoteMode() {
    isNoteMode = !isNoteMode;
    
    if (isNoteMode) {
        learningModeTemp = currentWord;
        learningModeChecked = isChecked;
        nextQuestion(); 
    } else {
        currentWord = learningModeTemp;
        isChecked = learningModeChecked;
        if (currentWord) {
            renderUI();
            if (isChecked) showResult(false);
        } else {
            nextQuestion();
        }
    }
    updateModeUI();
    save();
}

function updateModeUI() {
    document.getElementById('mode-label').innerText = isNoteMode ? "Notebook" : "Learning";
    document.getElementById('note-mode-toggle').style.color = isNoteMode ? '#ef4444' : 'var(--sub)';
}

function updateProgress() {
    if (typeof vocabData === 'undefined') return;
    const total = vocabData.filter(d => selectedUnits.includes(String(d.level))).length;
    const remaining = (waitingQueue ? waitingQueue.length : 0) + (currentWord && !isChecked && !isNoteMode ? 1 : 0);
    const completed = total - remaining;
    
    document.getElementById('note-count').innerText = notebook.length;
    
    if (isNoteMode) {
        document.getElementById('completed-count').innerText = notebook.length;
        document.getElementById('total-count').innerText = notebook.length;
        document.getElementById('progress-bar').style.width = '100%';
    } else {
        document.getElementById('completed-count').innerText = completed;
        document.getElementById('total-count').innerText = total;
        const percent = (total === 0) ? 0 : (completed / total) * 100;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    }
}

function renderUnits() {
    if (typeof vocabData === 'undefined') return;
    const units = [...new Set(
        vocabData
            .map(d => d.level)
            .filter(v => v !== undefined && v !== null)
            .map(v => String(v))
    )];
    units.sort((a, b) => {
        const na = Number(a);
        const nb = Number(b);
        if (!isNaN(na) && !isNaN(nb)) return na - nb;
        return a.localeCompare(b, 'zh-Hant', { numeric: true });
    });
    const container = document.getElementById('unit-container');
    container.innerHTML = '';
    units.forEach(u => {
        const el = document.createElement('div');
        el.className = `unit-link ${selectedUnits.includes(u) ? 'active' : ''}`;
        el.innerText = u;
        el.onclick = () => {
            isNoteMode = false;
            if (selectedUnits.includes(u)) {
                if (selectedUnits.length > 1) {
                    selectedUnits = selectedUnits.filter(i => i !== u);
                }
            } else {
                selectedUnits.push(u);
            }
            currentWord = null;
            learningModeTemp = null;
            refreshQueue();
            nextQuestion();
            renderUnits();
            updateModeUI();
        };
        container.appendChild(el);
    });
}

function toggleNote() {
    if (!currentWord) return;
    const idx = notebook.findIndex(n => n.word === currentWord.word);
    if (idx === -1) notebook.push(currentWord);
    else notebook.splice(idx, 1);
    save();
    updateStarUI();
}

function updateStarUI() {
    if(!currentWord) return;
    const isNoted = notebook.some(n => n.word === currentWord.word);
    document.getElementById('star-icon').style.color = isNoted ? '#f59e0b' : 'var(--sub)';
}

function addHistory(word, isCorrect) {
    const container = document.getElementById('history-list');
    const tag = document.createElement('div');
    tag.className = 'h-tag';
    tag.innerHTML = `${word} ${isCorrect?'●':'○'}`;
    tag.onclick = () => {
        const found = vocabData.find(v => v.word === word);
        if (found) { currentWord = found; isChecked = true; renderUI(); showResult(false); }
    };
    container.prepend(tag);
    if (container.children.length > 8) container.lastChild.remove();
}

function exportData() {
    const data = { n: notebook.map(v => v.word), u: selectedUnits, q: waitingQueue.map(v => v.word) };
    const str = btoa(encodeURIComponent(JSON.stringify(data)));
    navigator.clipboard.writeText(str);
    alert("進度已複製！");
}

function importData() {
    const str = prompt("貼上匯入代碼：");
    if (!str) return;
    try {
        const data = JSON.parse(decodeURIComponent(atob(str)));
        selectedUnits = Array.isArray(data.u) ? data.u.map(String) : [String(data.u)];
        notebook = data.n.map(w => vocabData.find(v => v.word === w)).filter(Boolean);
        waitingQueue = data.q.map(w => vocabData.find(v => v.word === w)).filter(Boolean);
        currentWord = null;
        isChecked = false;
        isNoteMode = false;
        save();
        renderUnits();
        nextQuestion();
        updateModeUI();
        alert("匯入成功！");
    } catch (e) { alert("無效代碼"); }
}

function speak() {
    if(!currentWord) return;
    const u = new SpeechSynthesisUtterance(currentWord.word);
    u.lang = 'en-US'; window.speechSynthesis.speak(u);
}

document.addEventListener('keypress', e => { if (e.key === 'Enter') handleAction(); });
