(function () {
  const STORAGE_KEY = 'study_planner_vanilla_v1';
  const TOTAL_WEEKS = 18;
  const TOTAL_PAIRS = 5;

  const DICT = {
    ru: {
      appTitle: 'Мои уроки',
      home: 'Главная',
      schedule: 'Расписание',
      completed: 'Выполненные',
      stats: 'Статистика',
      today: 'Сегодня',
      tomorrow: 'Завтра',
      overdue: 'Просроченные',
      tasksCount: 'заданий',
      noTasksToday: 'На сегодня заданий нет',
      noTasksTomorrow: 'На завтра заданий нет',
      noOverdue: 'Просроченных заданий нет',
      addHomework: 'Добавить ДЗ',
      editHomework: 'Редактировать ДЗ',
      subject: 'Предмет',
      subjectPlaceholder: 'Например: Алгебра, Химия, Физика...',
      whatAssigned: 'Что задали',
      whatAssignedPlaceholder: 'Например: №145, 146 или параграф 12...',
      dateAssigned: 'Когда задали',
      dateDue: 'К какому числу',
      save: 'Сохранить',
      selectDate: 'Выберите дату',
      doneBtn: 'Сделано',
      notFinishedBtn: 'Ещё не до конца',
      inProgressBadge: 'Ещё не до конца',
      completedEmpty: 'Выполненных заданий пока нет',
      week: 'Неделя',
      weekOf: 'из',
      pair: 'пара',
      emptySlot: 'Пусто',
      windowLabel: 'Окно',
      markAsWindow: 'Отметить как «Окно» (свободная пара)',
      applyToWeeks: 'На какие недели применить?',
      modeSingle: 'Только эта неделя',
      modeRange: 'Диапазон недель',
      modeSpecific: 'Выборочные недели',
      modeAll: 'Все недели (1–18)',
      fromWeek: 'С недели',
      toWeek: 'По неделю',
      activeRules: 'Правила для этой пары:',
      clearSlot: 'Очистить пару',
      settings: 'Настройки',
      language: 'Язык интерфейса',
      exportJson: 'Экспорт JSON',
      importJson: 'Импорт JSON',
      resetAll: 'Сбросить все данные',
      totalTasks: 'Всего заданий',
      completedTasks: 'Выполнено',
      remainingTasks: 'Осталось',
      inProgressTasks: 'Ещё не до конца',
      topSubject: 'Самый активный предмет',
      noData: 'Нет данных',
      daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
      daysFull: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ]
    },
    ky: {
      appTitle: 'Менин сабактарым',
      home: 'Башкы',
      schedule: 'Жадыбал',
      completed: 'Аткарылган',
      stats: 'Статистика',
      today: 'Бүгүн',
      tomorrow: 'Эртең',
      overdue: 'Мөөнөтү өткөн',
      tasksCount: 'тапшырма',
      noTasksToday: 'Бүгүнгө тапшырма жок',
      noTasksTomorrow: 'Эртеңкиге тапшырма жок',
      noOverdue: 'Мөөнөтү өткөн тапшырма жок',
      addHomework: 'Үй тапшырма кошуу',
      editHomework: 'Тапшырманы өзгөртүү',
      subject: 'Предмет',
      subjectPlaceholder: 'Мисалы: Алгебра, Химия, Физика...',
      whatAssigned: 'Эмне берилди',
      whatAssignedPlaceholder: 'Мисалы: №145, 146 же 12-параграф...',
      dateAssigned: 'Качан берилди',
      dateDue: 'Кайсы күнгө чейин',
      save: 'Сактоо',
      selectDate: 'Күндү тандаңыз',
      doneBtn: 'Аткарылды',
      notFinishedBtn: 'Аягына чыга элек',
      inProgressBadge: 'Аягына чыга элек',
      completedEmpty: 'Аткарылган тапшырмалар жок',
      week: 'Апта',
      weekOf: '/',
      pair: 'жуп сабак',
      emptySlot: 'Бош',
      windowLabel: 'Терезе',
      markAsWindow: '«Терезе» катары белгилөө (бош сабак)',
      applyToWeeks: 'Кайсы апталарга колдонулат?',
      modeSingle: 'Ушул гана апта',
      modeRange: 'Апталар аралыгы',
      modeSpecific: 'Тандалган апталар',
      modeAll: 'Бардык апталар (1–18)',
      fromWeek: 'Кайсы аптадан',
      toWeek: 'Кайсы аптага чейин',
      activeRules: 'Бул сабактын эрежелери:',
      clearSlot: 'Сабакты тазалоо',
      settings: 'Жөндөөлөр',
      language: 'Интерфейс тили',
      exportJson: 'JSON экспорт',
      importJson: 'JSON импорт',
      resetAll: 'Баарын тазалоо',
      totalTasks: 'Бардык тапшырмалар',
      completedTasks: 'Аткарылды',
      remainingTasks: 'Калды',
      inProgressTasks: 'Аягына чыга элек',
      topSubject: 'Эң активдүү предмет',
      noData: 'Маалымат жок',
      daysShort: ['Дш', 'Шш', 'Шр', 'Бш', 'Жм'],
      daysFull: ['Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума'],
      months: [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
      ]
    },
    en: {
      appTitle: 'My Lessons',
      home: 'Home',
      schedule: 'Schedule',
      completed: 'Completed',
      stats: 'Stats',
      today: 'Today',
      tomorrow: 'Tomorrow',
      overdue: 'Overdue',
      tasksCount: 'tasks',
      noTasksToday: 'No tasks for today',
      noTasksTomorrow: 'No tasks for tomorrow',
      noOverdue: 'No overdue tasks',
      addHomework: 'Add Homework',
      editHomework: 'Edit Homework',
      subject: 'Subject',
      subjectPlaceholder: 'Enter subject...',
      whatAssigned: 'What was assigned',
      whatAssignedPlaceholder: 'Enter homework details...',
      dateAssigned: 'Assigned date',
      dateDue: 'Due date',
      save: 'Save',
      selectDate: 'Select date',
      doneBtn: 'Done',
      notFinishedBtn: 'Not finished yet',
      inProgressBadge: 'Not finished yet',
      completedEmpty: 'No completed tasks yet',
      week: 'Week',
      weekOf: 'of',
      pair: 'period',
      emptySlot: 'Empty',
      windowLabel: 'Free period',
      markAsWindow: 'Mark as free period',
      applyToWeeks: 'Apply to which weeks?',
      modeSingle: 'This week only',
      modeRange: 'Week range',
      modeSpecific: 'Specific weeks',
      modeAll: 'All weeks (1–18)',
      fromWeek: 'From week',
      toWeek: 'To week',
      activeRules: 'Rules for this period:',
      clearSlot: 'Clear period',
      settings: 'Settings',
      language: 'Interface language',
      exportJson: 'Export JSON',
      importJson: 'Import JSON',
      resetAll: 'Reset all data',
      totalTasks: 'Total tasks',
      completedTasks: 'Completed',
      remainingTasks: 'Remaining',
      inProgressTasks: 'Not finished yet',
      topSubject: 'Most active subject',
      noData: 'No data',
      daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      daysFull: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    }
  };

  function toIsoDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function addDaysIso(baseIso, delta) {
    const [y, m, d] = baseIso.split('-').map(Number);
    return toIsoDate(new Date(y, (m || 1) - 1, (d || 1) + delta));
  }

  function formatDisplayDate(iso) {
    if (!iso) return '';
    const [y, m, d] = iso.split('-');
    return `${d}.${m}.${y}`;
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function ruleMatchesWeek(rule, week) {
    if (rule.weekMode === 'all') return week >= 1 && week <= TOTAL_WEEKS;
    if (rule.weekMode === 'single') return rule.weekStart === week;
    if (rule.weekMode === 'range') {
      const start = Math.min(rule.weekStart, rule.weekEnd);
      const end = Math.max(rule.weekStart, rule.weekEnd);
      return week >= start && week <= end;
    }
    if (rule.weekMode === 'specific') {
      return Array.isArray(rule.specificWeeks) && rule.specificWeeks.includes(week);
    }
    return false;
  }

  function resolveSlot(rules, dayIndex, pairIndex, week) {
    const matching = rules
      .filter((r) => r.dayIndex === dayIndex && r.pairIndex === pairIndex && ruleMatchesWeek(r, week))
      .sort((a, b) => b.updatedAt - a.updatedAt);
    return matching[0] || null;
  }

  function loadState() {
    const fallback = {
      lang: 'ru',
      selectedWeek: 1,
      selectedDay: 0,
      tasks: [],
      rules: []
    };
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      const parsed = JSON.parse(raw);
      return {
        lang: ['ru', 'ky', 'en'].includes(parsed.lang) ? parsed.lang : 'ru',
        selectedWeek:
          typeof parsed.selectedWeek === 'number' && parsed.selectedWeek >= 1 && parsed.selectedWeek <= TOTAL_WEEKS
            ? parsed.selectedWeek
            : 1,
        selectedDay:
          typeof parsed.selectedDay === 'number' && parsed.selectedDay >= 0 && parsed.selectedDay <= 4
            ? parsed.selectedDay
            : 0,
        tasks: Array.isArray(parsed.tasks) ? parsed.tasks : [],
        rules: Array.isArray(parsed.rules) ? parsed.rules : []
      };
    } catch {
      return fallback;
    }
  }

  let state = loadState();
  let activeTab = 'home';

  // Task Modal State
  let editingTaskId = null;
  let formAssigned = toIsoDate(new Date());
  let formDue = toIsoDate(new Date());
  let activeDateField = 'due';
  let calYear = new Date().getFullYear();
  let calMonth = new Date().getMonth();

  // Slot Modal State
  let editingSlot = null;
  let slotWeekMode = 'single';
  let slotSpecificWeeks = [1];

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }

  function t() {
    return DICT[state.lang];
  }

  function getTodayIso() {
    return toIsoDate(new Date());
  }

  function renderTaskCard(task) {
    const lang = t();
    const todayIso = getTodayIso();
    const tomorrowIso = addDaysIso(todayIso, 1);
    const isDone = task.status === 'completed';
    const isOverdue = !isDone && task.dueDate < todayIso;
    const dueLabel =
      task.dueDate === todayIso
        ? lang.today
        : task.dueDate === tomorrowIso
        ? lang.tomorrow
        : formatDisplayDate(task.dueDate);
    const avatar = escapeHtml((task.subject || 'Д').slice(0, 1).toUpperCase());

    return `
      <div class="task-card">
        <div class="task-top">
          <button type="button" class="task-body-btn" data-edit-task="${task.id}">
            <div class="subject-avatar">${avatar}</div>
            <div class="task-info">
              <div class="task-title-row">
                <span class="task-subject ${isDone ? 'done' : ''}">${escapeHtml(task.subject)}</span>
                ${
                  task.status === 'in_progress'
                    ? `<span class="badge-progress">${lang.inProgressBadge}</span>`
                    : ''
                }
              </div>
              ${
                task.description
                  ? `<p class="task-desc ${isDone ? 'done' : ''}">${escapeHtml(task.description)}</p>`
                  : ''
              }
              <div class="task-due ${isOverdue ? 'overdue' : ''}">${dueLabel}</div>
            </div>
          </button>
          <button type="button" class="check-circle ${isDone ? 'checked' : ''}" data-toggle-done="${task.id}">
            ${isDone ? '✓' : ''}
          </button>
        </div>
        <div class="task-actions">
          <button type="button" class="status-btn ${task.status === 'completed' ? 'active-done' : ''}" data-set-done="${task.id}">
            ${lang.doneBtn}
          </button>
          <button type="button" class="status-btn ${task.status === 'in_progress' ? 'active-progress' : ''}" data-set-progress="${task.id}">
            ${lang.notFinishedBtn}
          </button>
        </div>
      </div>
    `;
  }

  function renderHome() {
    const lang = t();
    const todayIso = getTodayIso();
    const tomorrowIso = addDaysIso(todayIso, 1);

    const activeTasks = state.tasks
      .filter((x) => x.status !== 'completed')
      .sort((a, b) => b.createdAt - a.createdAt);

    const todayTasks = activeTasks.filter((x) => x.dueDate === todayIso);
    const tomorrowTasks = activeTasks.filter((x) => x.dueDate === tomorrowIso);
    const overdueTasks = activeTasks.filter((x) => x.dueDate < todayIso);

    const renderGroup = (title, tasks, emptyMsg, dateSub, isDanger) => `
      <section class="section-block">
        <div class="section-head ${isDanger ? 'danger' : ''}">
          <div class="section-head-left">
            <h2>${title}</h2>
            ${dateSub ? `<span class="date-sub">${dateSub}</span>` : ''}
          </div>
          <span class="count-text">${tasks.length} ${lang.tasksCount}</span>
        </div>
        ${
          tasks.length === 0
            ? `<div class="empty-card">${emptyMsg}</div>`
            : `<div class="stack-list">${tasks.map(renderTaskCard).join('')}</div>`
        }
      </section>
    `;

    return `
      ${renderGroup(lang.today, todayTasks, lang.noTasksToday, formatDisplayDate(todayIso), false)}
      ${renderGroup(lang.tomorrow, tomorrowTasks, lang.noTasksTomorrow, formatDisplayDate(tomorrowIso), false)}
      ${renderGroup(lang.overdue, overdueTasks, lang.noOverdue, '', true)}
      <div class="home-actions-grid">
        <button type="button" id="homeAddHwBtn" class="primary-btn">+ ${lang.addHomework}</button>
        <button type="button" id="homeOpenScheduleBtn" class="secondary-btn">${lang.schedule}</button>
      </div>
    `;
  }

  function renderSchedule() {
    const lang = t();
    let weeksHtml = '';
    for (let w = 1; w <= TOTAL_WEEKS; w++) {
      const isSelected = state.selectedWeek === w;
      const hasRule = state.rules.some((r) => ruleMatchesWeek(r, w));
      weeksHtml += `
        <button type="button" class="week-pill ${isSelected ? 'active' : ''}" data-select-week="${w}">
          <span>${lang.week} ${w}</span>
          <span class="week-dot ${hasRule ? 'has-rule' : ''}"></span>
        </button>
      `;
    }

    const daysHtml = lang.daysShort
      .map(
        (label, idx) => `
        <button type="button" class="day-btn ${state.selectedDay === idx ? 'active' : ''}" data-select-day="${idx}">
          ${label}
        </button>
      `
      )
      .join('');

    let pairsHtml = '';
    for (let pairIdx = 0; pairIdx < TOTAL_PAIRS; pairIdx++) {
      const slot = resolveSlot(state.rules, state.selectedDay, pairIdx, state.selectedWeek);
      const isWindow = slot && slot.isWindow === true;
      const subjectText = slot && !slot.isWindow ? slot.subject : '';

      let titleHtml = `<div class="pair-title empty">${pairIdx + 1} ${lang.pair} • ${lang.emptySlot}</div>`;
      if (isWindow) {
        titleHtml = `<div class="pair-title window">${lang.windowLabel}</div>`;
      } else if (subjectText) {
        titleHtml = `<div class="pair-title">${escapeHtml(subjectText)}</div>`;
      }

      pairsHtml += `
        <div class="pair-card">
          <button type="button" class="pair-main-btn" data-open-slot="${pairIdx}">
            <div class="pair-num">${pairIdx + 1}</div>
            <div style="min-width:0;flex:1;">
              ${titleHtml}
              <div class="pair-sub">${pairIdx + 1} ${lang.pair}</div>
            </div>
          </button>
          ${
            subjectText
              ? `<button type="button" class="quick-hw-btn" data-quick-hw="${escapeHtml(subjectText)}">+ ${lang.addHomework}</button>`
              : ''
          }
        </div>
      `;
    }

    return `
      <div class="weeks-strip" id="weeksStrip">${weeksHtml}</div>
      <div class="days-grid">${daysHtml}</div>
      <div class="section-head">
        <h2>${lang.daysFull[state.selectedDay]}</h2>
        <span class="muted-small">${lang.week} ${state.selectedWeek} ${lang.weekOf} ${TOTAL_WEEKS}</span>
      </div>
      <div class="stack-list">${pairsHtml}</div>
    `;
  }

  function renderCompleted() {
    const lang = t();
    const completed = state.tasks
      .filter((x) => x.status === 'completed')
      .sort((a, b) => (b.completedAt || b.createdAt) - (a.completedAt || a.createdAt));

    if (completed.length === 0) {
      return `<div class="empty-card" style="text-align:center;padding:24px;">${lang.completedEmpty}</div>`;
    }
    return `<div class="stack-list">${completed.map(renderTaskCard).join('')}</div>`;
  }

  function renderStats() {
    const lang = t();
    const total = state.tasks.length;
    const done = state.tasks.filter((x) => x.status === 'completed').length;
    const inProg = state.tasks.filter((x) => x.status === 'in_progress').length;
    const remaining = total - done;

    const counts = {};
    state.tasks.forEach((x) => {
      const k = (x.subject || '').trim();
      if (k) counts[k] = (counts[k] || 0) + 1;
    });

    let topSubject = lang.noData;
    let maxCount = 0;
    Object.entries(counts).forEach(([subj, cnt]) => {
      if (cnt > maxCount) {
        maxCount = cnt;
        topSubject = subj;
      }
    });

    return `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="muted-small">${lang.totalTasks}</div>
          <div class="stat-val">${total}</div>
        </div>
        <div class="stat-card">
          <div class="muted-small">${lang.completedTasks}</div>
          <div class="stat-val accent">${done}</div>
        </div>
        <div class="stat-card">
          <div class="muted-small">${lang.remainingTasks}</div>
          <div class="stat-val">${remaining}</div>
        </div>
        <div class="stat-card">
          <div class="muted-small">${lang.inProgressTasks}</div>
          <div class="stat-val amber">${inProg}</div>
        </div>
        <div class="stat-card wide">
          <div class="muted-small">${lang.topSubject}</div>
          <div class="stat-val subject">${escapeHtml(topSubject)}</div>
        </div>
      </div>
    `;
  }

  function renderApp() {
    const lang = t();
    const titleEl = document.getElementById('pageTitle');
    if (activeTab === 'home') titleEl.textContent = lang.appTitle;
    if (activeTab === 'schedule') titleEl.textContent = lang.schedule;
    if (activeTab === 'completed') titleEl.textContent = lang.completed;
    if (activeTab === 'stats') titleEl.textContent = lang.stats;

    const mainEl = document.getElementById('mainContent');
    if (activeTab === 'home') mainEl.innerHTML = renderHome();
    if (activeTab === 'schedule') mainEl.innerHTML = renderSchedule();
    if (activeTab === 'completed') mainEl.innerHTML = renderCompleted();
    if (activeTab === 'stats') mainEl.innerHTML = renderStats();

    const navEl = document.getElementById('bottomNav');
    const tabs = [
      ['home', lang.home],
      ['schedule', lang.schedule],
      ['completed', lang.completed],
      ['stats', lang.stats]
    ];
    navEl.innerHTML = tabs
      .map(
        ([key, label]) => `
        <button type="button" class="nav-btn ${activeTab === key ? 'active' : ''}" data-tab="${key}">
          ${label}
        </button>
      `
      )
      .join('');
  }

  // Calendar rendering for Task Modal
  function renderCalendar() {
    const lang = t();
    document.getElementById('lblSelectDate').textContent = lang.selectDate;
    document.getElementById('calMonthLabel').textContent = `${lang.months[calMonth]} ${calYear}`;

    const weekdaysEl = document.getElementById('calWeekdays');
    weekdaysEl.innerHTML =
      lang.daysShort.map((d) => `<div>${d}</div>`).join('') + '<div>•</div><div>•</div>';

    const firstDay = new Date(calYear, calMonth, 1);
    const startWeekday = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const picked = activeDateField === 'assigned' ? formAssigned : formDue;

    let cellsHtml = '';
    for (let i = 0; i < startWeekday; i++) {
      cellsHtml += '<div></div>';
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const mStr = String(calMonth + 1).padStart(2, '0');
      const dStr = String(d).padStart(2, '0');
      const iso = `${calYear}-${mStr}-${dStr}`;
      cellsHtml += `
        <button type="button" class="cal-day-btn ${picked === iso ? 'selected' : ''}" data-cal-iso="${iso}">
          ${d}
        </button>
      `;
    }
    document.getElementById('calGrid').innerHTML = cellsHtml;
  }

  function updateTaskModalDatesUI() {
    document.getElementById('valAssigned').textContent = formatDisplayDate(formAssigned);
    document.getElementById('valDue').textContent = formatDisplayDate(formDue);
    document.getElementById('pickAssignedBtn').classList.toggle('active', activeDateField === 'assigned');
    document.getElementById('pickDueBtn').classList.toggle('active', activeDateField === 'due');
    renderCalendar();
  }

  function openTaskModal(task = null, prefillSubject = '') {
    const lang = t();
    const todayIso = getTodayIso();
    editingTaskId = task ? task.id : null;

    document.getElementById('taskModalTitle').textContent = task ? lang.editHomework : lang.addHomework;
    document.getElementById('lblSubject').textContent = lang.subject;
    document.getElementById('inputSubject').placeholder = lang.subjectPlaceholder;
    document.getElementById('lblDesc').textContent = lang.whatAssigned;
    document.getElementById('inputDesc').placeholder = lang.whatAssignedPlaceholder;
    document.getElementById('lblAssigned').textContent = lang.dateAssigned;
    document.getElementById('lblDue').textContent = lang.dateDue;
    document.getElementById('saveTaskBtn').textContent = lang.save;

    const delBtn = document.getElementById('deleteTaskBtn');
    delBtn.classList.toggle('hidden', !task);

    document.getElementById('inputSubject').value = task ? task.subject : prefillSubject;
    document.getElementById('inputDesc').value = task ? task.description : '';

    formAssigned = task ? task.assignedDate