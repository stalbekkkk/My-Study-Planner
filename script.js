(function () {
  function init() {
    const STORAGE_KEY = 'study_planner_vanilla_v1';
    const TOTAL_WEEKS = 18;
    const TOTAL_PAIRS = 5;
    let ruleCounter = 0;

    const DICT = {
      ru: {
        appTitle: 'Мои уроки',
        home: 'Главная',
        schedule: 'Расписание',
        completed: 'Выполненные',
        stats: 'Статистика',
        today: 'Сегодня',
        tomorrow: 'Завтра',
        upcoming: 'Предстоящие',
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
        upcoming: 'Алдыдагы',
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
        upcoming: 'Upcoming',
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
      return DICT[state.lang] || DICT.ru;
    }

    function getTodayIso() {
      return toIsoDate(new Date());
    }

    function flashError(el) {
      if (!el) return;
      el.classList.add('error-ring');
      setTimeout(() => el.classList.remove('error-ring'), 900);
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
      const avatar = escapeHtml((task.subject || '•').slice(0, 1).toUpperCase());

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
      const upcomingTasks = activeTasks.filter((x) => x.dueDate > tomorrowIso);
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

      const upcomingBlock =
        upcomingTasks.length > 0
          ? renderGroup(lang.upcoming, upcomingTasks, '', '', false)
          : '';

      return `
        ${renderGroup(lang.today, todayTasks, lang.noTasksToday, formatDisplayDate(todayIso), false)}
        ${renderGroup(lang.tomorrow, tomorrowTasks, lang.noTasksTomorrow, formatDisplayDate(tomorrowIso), false)}
        ${upcomingBlock}
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

      formAssigned = task ? task.assignedDate : todayIso;
      formDue = task ? task.dueDate : todayIso;
      activeDateField = 'due';

      const [y, m] = formDue.split('-').map(Number);
      calYear = y || new Date().getFullYear();
      calMonth = (m || 1) - 1;

      const subjSet = new Set();
      state.rules.forEach((r) => {
        if (!r.isWindow && r.subject && r.subject.trim()) subjSet.add(r.subject.trim());
      });
      state.tasks.forEach((tk) => {
        if (tk.subject && tk.subject.trim()) subjSet.add(tk.subject.trim());
      });

      const chipsEl = document.getElementById('subjectChips');
      chipsEl.innerHTML = Array.from(subjSet)
        .slice(0, 6)
        .map((s) => `<button type="button" class="chip-btn" data-chip-subj="${escapeHtml(s)}">${escapeHtml(s)}</button>`)
        .join('');

      updateTaskModalDatesUI();
      document.getElementById('taskModal').classList.remove('hidden');
    }

    function closeTaskModal() {
      document.getElementById('taskModal').classList.add('hidden');
    }

    function renderSlotModalBody() {
      if (!editingSlot) return;
      const lang = t();
      const { dayIndex, pairIndex } = editingSlot;

      document.getElementById('slotModalTitle').textContent = `${lang.daysFull[dayIndex]} • ${pairIndex + 1} ${lang.pair}`;
      document.getElementById('slotModalSub').textContent = `${lang.week} ${state.selectedWeek} ${lang.weekOf} ${TOTAL_WEEKS}`;
      document.getElementById('lblMarkWindow').textContent = lang.markAsWindow;
      document.getElementById('lblSlotSubject').textContent = lang.subject;
      document.getElementById('slotSubjectInput').placeholder = lang.subjectPlaceholder;
      document.getElementById('lblApplyWeeks').textContent = lang.applyToWeeks;
      document.getElementById('lblFromWeek').textContent = lang.fromWeek;
      document.getElementById('lblToWeek').textContent = lang.toWeek;
      document.getElementById('lblActiveRules').textContent = lang.activeRules;
      document.getElementById('clearSlotBtn').textContent = lang.clearSlot;
      document.getElementById('saveSlotBtn').textContent = lang.save;

      const isWin = document.getElementById('slotWindowCheck').checked;
      document.getElementById('slotSubjectBox').classList.toggle('hidden', isWin);

      const modes = [
        ['single', lang.modeSingle],
        ['range', lang.modeRange],
        ['specific', lang.modeSpecific],
        ['all', lang.modeAll]
      ];
      document.getElementById('weekModesGrid').innerHTML = modes
        .map(
          ([mode, label]) => `
          <button type="button" class="mode-btn ${slotWeekMode === mode ? 'active' : ''}" data-week-mode="${mode}">
            ${label}
          </button>
        `
        )
        .join('');

      document.getElementById('rangeControls').classList.toggle('hidden', slotWeekMode !== 'range');
      document.getElementById('specificWeeksGrid').classList.toggle('hidden', slotWeekMode !== 'specific');

      let specHtml = '';
      for (let w = 1; w <= TOTAL_WEEKS; w++) {
        specHtml += `
          <button type="button" class="week-num-btn ${slotSpecificWeeks.includes(w) ? 'active' : ''}" data-toggle-spec-week="${w}">
            ${w}
          </button>
        `;
      }
      document.getElementById('specificWeeksGrid').innerHTML = specHtml;

      const slotRules = state.rules.filter((r) => r.dayIndex === dayIndex && r.pairIndex === pairIndex);
      const rulesBox = document.getElementById('existingRulesBox');
      rulesBox.classList.toggle('hidden', slotRules.length === 0);

      document.getElementById('existingRulesList').innerHTML = slotRules
        .map((r) => {
          const rangeTxt =
            r.weekMode === 'all'
              ? '1–18'
              : r.weekMode === 'single'
              ? `${r.weekStart}`
              : r.weekMode === 'range'
              ? `${r.weekStart}–${r.weekEnd}`
              : r.specificWeeks.join(', ');
          const nameTxt = r.isWindow ? lang.windowLabel : escapeHtml(r.subject);
          return `
            <span class="rule-chip">
              <span>${nameTxt} (${rangeTxt})</span>
              <button type="button" data-del-rule="${r.id}">×</button>
            </span>
          `;
        })
        .join('');
    }

    function openSlotModal(dayIndex, pairIndex) {
      const lang = t();
      editingSlot = { dayIndex, pairIndex };
      const current = resolveSlot(state.rules, dayIndex, pairIndex, state.selectedWeek);

      document.getElementById('slotWindowCheck').checked = current ? current.isWindow : false;
      document.getElementById('slotSubjectInput').value = current && !current.isWindow ? current.subject : '';
      slotWeekMode = 'single';
      slotSpecificWeeks = [state.selectedWeek];

      let optionsHtml = '';
      for (let w = 1; w <= TOTAL_WEEKS; w++) {
        optionsHtml += `<option value="${w}">${lang.week} ${w}</option>`;
      }
      const startSel = document.getElementById('rangeStartSelect');
      const endSel = document.getElementById('rangeEndSelect');
      startSel.innerHTML = optionsHtml;
      endSel.innerHTML = optionsHtml;
      startSel.value = String(state.selectedWeek);
      endSel.value = String(TOTAL_WEEKS);

      renderSlotModalBody();
      document.getElementById('slotModal').classList.remove('hidden');
    }

    function closeSlotModal() {
      editingSlot = null;
      document.getElementById('slotModal').classList.add('hidden');
    }

    function renderSettingsModal() {
      const lang = t();
      document.getElementById('settingsTitle').textContent = lang.settings;
      document.getElementById('lblLanguage').textContent = lang.language;
      document.getElementById('exportJsonBtn').textContent = lang.exportJson;
      document.getElementById('lblImportJson').textContent = lang.importJson;
      document.getElementById('resetAllBtn').textContent = lang.resetAll;

      const langs = [
        ['ru', 'Русский'],
        ['ky', 'Кыргызча'],
        ['en', 'English']
      ];
      document.getElementById('langButtons').innerHTML = langs
        .map(
          ([code, label]) => `
          <button type="button" class="mode-btn ${state.lang === code ? 'active' : ''}" data-set-lang="${code}" style="text-align:center;">
            ${label}
          </button>
        `
        )
        .join('');
    }

    // Event Listeners
    document.getElementById('bottomNav').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      activeTab = btn.getAttribute('data-tab');
      renderApp();
    });

    document.getElementById('mainContent').addEventListener('click', (e) => {
      if (e.target.closest('#homeAddHwBtn')) {
        openTaskModal(null, '');
        return;
      }

      if (e.target.closest('#homeOpenScheduleBtn')) {
        activeTab = 'schedule';
        renderApp();
        return;
      }

      const editTaskBtn = e.target.closest('[data-edit-task]');
      if (editTaskBtn) {
        const id = editTaskBtn.getAttribute('data-edit-task');
        const task = state.tasks.find((x) => x.id === id);
        if (task) openTaskModal(task);
        return;
      }

      const toggleDoneBtn = e.target.closest('[data-toggle-done]');
      if (toggleDoneBtn) {
        const id = toggleDoneBtn.getAttribute('data-toggle-done');
        state.tasks = state.tasks.map((item) => {
          if (item.id !== id) return item;
          const nextDone = item.status !== 'completed';
          return {
            ...item,
            status: nextDone ? 'completed' : 'pending',
            completedAt: nextDone ? Date.now() : undefined
          };
        });
        saveState();
        renderApp();
        return;
      }

      const setDoneBtn = e.target.closest('[data-set-done]');
      if (setDoneBtn) {
        const id = setDoneBtn.getAttribute('data-set-done');
        state.tasks = state.tasks.map((item) =>
          item.id === id ? { ...item, status: 'completed', completedAt: Date.now() } : item
        );
        saveState();
        renderApp();
        return;
      }

      const setProgBtn = e.target.closest('[data-set-progress]');
      if (setProgBtn) {
        const id = setProgBtn.getAttribute('data-set-progress');
        state.tasks = state.tasks.map((item) =>
          item.id === id
            ? { ...item, status: item.status === 'in_progress' ? 'pending' : 'in_progress', completedAt: undefined }
            : item
        );
        saveState();
        renderApp();
        return;
      }

      const weekBtn = e.target.closest('[data-select-week]');
      if (weekBtn) {
        state.selectedWeek = Number(weekBtn.getAttribute('data-select-week'));
        saveState();
        renderApp();
        return;
      }

      const dayBtn = e.target.closest('[data-select-day]');
      if (dayBtn) {
        state.selectedDay = Number(dayBtn.getAttribute('data-select-day'));
        saveState();
        renderApp();
        return;
      }

      const slotBtn = e.target.closest('[data-open-slot]');
      if (slotBtn) {
        const pairIdx = Number(slotBtn.getAttribute('data-open-slot'));
        openSlotModal(state.selectedDay, pairIdx);
        return;
      }

      const quickHwBtn = e.target.closest('[data-quick-hw]');
      if (quickHwBtn) {
        openTaskModal(null, quickHwBtn.getAttribute('data-quick-hw'));
      }
    });

    // Task Modal Listeners
    document.getElementById('closeTaskModalBtn').addEventListener('click', closeTaskModal);

    document.getElementById('deleteTaskBtn').addEventListener('click', () => {
      if (!editingTaskId) return;
      state.tasks = state.tasks.filter((x) => x.id !== editingTaskId);
      saveState();
      closeTaskModal();
      renderApp();
    });

    document.getElementById('subjectChips').addEventListener('click', (e) => {
      const chip = e.target.closest('[data-chip-subj]');
      if (!chip) return;
      document.getElementById('inputSubject').value = chip.getAttribute('data-chip-subj');
    });

    document.getElementById('pickAssignedBtn').addEventListener('click', () => {
      activeDateField = 'assigned';
      const [y, m] = formAssigned.split('-').map(Number);
      calYear = y;
      calMonth = (m || 1) - 1;
      updateTaskModalDatesUI();
    });

    document.getElementById('pickDueBtn').addEventListener('click', () => {
      activeDateField = 'due';
      const [y, m] = formDue.split('-').map(Number);
      calYear = y;
      calMonth = (m || 1) - 1;
      updateTaskModalDatesUI();
    });

    document.getElementById('prevMonthBtn').addEventListener('click', () => {
      if (calMonth === 0) {
        calMonth = 11;
        calYear -= 1;
      } else {
        calMonth -= 1;
      }
      renderCalendar();
    });

    document.getElementById('nextMonthBtn').addEventListener('click', () => {
      if (calMonth === 11) {
        calMonth = 0;
        calYear += 1;
      } else {
        calMonth += 1;
      }
      renderCalendar();
    });

    document.getElementById('calGrid').addEventListener('click', (e) => {
      const dayBtn = e.target.closest('[data-cal-iso]');
      if (!dayBtn) return;
      const iso = dayBtn.getAttribute('data-cal-iso');
      if (activeDateField === 'assigned') formAssigned = iso;
      else formDue = iso;
      updateTaskModalDatesUI();
    });

    document.getElementById('taskForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const subjectInput = document.getElementById('inputSubject');
      const descInput = document.getElementById('inputDesc');
      const subject = subjectInput.value.trim();
      const description = descInput.value.trim();

      if (!subject && !description) {
        flashError(document.getElementById('subjectCard'));
        subjectInput.focus();
        return;
      }

      const payload = {
        subject: subject || t().subject,
        description,
        assignedDate: formAssigned || getTodayIso(),
        dueDate: formDue || getTodayIso()
      };

      if (editingTaskId) {
        state.tasks = state.tasks.map((item) => (item.id === editingTaskId ? { ...item, ...payload } : item));
      } else {
        state.tasks.unshift({
          id: `${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          ...payload,
          status: 'pending',
          createdAt: Date.now()
        });
      }

      saveState();
      closeTaskModal();
      renderApp();
    });

    // Slot Modal Listeners
    document.getElementById('closeSlotModalBtn').addEventListener('click', closeSlotModal);

    document.getElementById('slotWindowCheck').addEventListener('change', renderSlotModalBody);

    document.getElementById('weekModesGrid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-week-mode]');
      if (!btn) return;
      slotWeekMode = btn.getAttribute('data-week-mode');
      renderSlotModalBody();
    });

    document.getElementById('specificWeeksGrid').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-toggle-spec-week]');
      if (!btn) return;
      const w = Number(btn.getAttribute('data-toggle-spec-week'));
      if (slotSpecificWeeks.includes(w)) {
        const next = slotSpecificWeeks.filter((x) => x !== w);
        slotSpecificWeeks = next.length > 0 ? next : [w];
      } else {
        slotSpecificWeeks = [...slotSpecificWeeks, w].sort((a, b) => a - b);
      }
      renderSlotModalBody();
    });

    document.getElementById('existingRulesList').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-del-rule]');
      if (!btn) return;
      const id = btn.getAttribute('data-del-rule');
      state.rules = state.rules.filter((r) => r.id !== id);
      saveState();
      renderSlotModalBody();
      renderApp();
    });

    document.getElementById('clearSlotBtn').addEventListener('click', () => {
      if (!editingSlot) return;
      state.rules = state.rules.filter(
        (r) => !(r.dayIndex === editingSlot.dayIndex && r.pairIndex === editingSlot.pairIndex)
      );
      saveState();
      closeSlotModal();
      renderApp();
    });

    document.getElementById('saveSlotBtn').addEventListener('click', () => {
      if (!editingSlot) return;
      const isWindow = document.getElementById('slotWindowCheck').checked;
      const subjectInput = document.getElementById('slotSubjectInput');
      const subject = subjectInput.value.trim();

      if (!isWindow && !subject) {
        flashError(document.getElementById('slotSubjectBox'));
        subjectInput.focus();
        return;
      }

      ruleCounter += 1;
      state.rules.push({
        id: `rule_${Date.now()}_${ruleCounter}`,
        dayIndex: editingSlot.dayIndex,
        pairIndex: editingSlot.pairIndex,
        subject: isWindow ? '' : subject,
        isWindow,
        weekMode: slotWeekMode,
        weekStart: Number(document.getElementById('rangeStartSelect').value) || state.selectedWeek,
        weekEnd: Number(document.getElementById('rangeEndSelect').value) || TOTAL_WEEKS,
        specificWeeks: slotSpecificWeeks.length > 0 ? slotSpecificWeeks : [state.selectedWeek],
        updatedAt: Date.now() * 1000 + (ruleCounter % 1000)
      });

      saveState();
      closeSlotModal();
      renderApp();
    });

    // Settings Modal Listeners
    document.getElementById('openSettingsBtn').addEventListener('click', () => {
      renderSettingsModal();
      document.getElementById('settingsModal').classList.remove('hidden');
    });

    document.getElementById('closeSettingsBtn').addEventListener('click', () => {
      document.getElementById('settingsModal').classList.add('hidden');
    });

    document.getElementById('langButtons').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-set-lang]');
      if (!btn) return;
      state.lang = btn.getAttribute('data-set-lang');
      saveState();
      renderSettingsModal();
      renderApp();
    });

    document.getElementById('exportJsonBtn').addEventListener('click', () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `study-planner-${getTodayIso()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById('importJsonInput').addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          if (parsed && typeof parsed === 'object') {
            if (['ru', 'ky', 'en'].includes(parsed.lang)) state.lang = parsed.lang;
            if (typeof parsed.selectedWeek === 'number') state.selectedWeek = parsed.selectedWeek;
            if (Array.isArray(parsed.tasks)) state.tasks = parsed.tasks;
            if (Array.isArray(parsed.rules)) state.rules = parsed.rules;
            saveState();
            renderSettingsModal();
            renderApp();
          }
        } catch {}
      };
      reader.readAsText(file);
      e.target.value = '';
    });

    document.getElementById('resetAllBtn').addEventListener('click', () => {
      state.tasks = [];
      state.rules = [];
      state.selectedWeek = 1;
      state.selectedDay = 0;
      saveState();
      document.getElementById('settingsModal').classList.add('hidden');
      renderApp();
    });

    renderApp();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();