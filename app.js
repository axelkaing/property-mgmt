// ── i18n ────────────────────────────────────────────────────────────────────

const STRINGS = {
  en: {
    app_title: 'Property Mgmt',
    nav_dashboard: 'Dashboard',
    nav_billing:   'Monthly Billing',
    nav_payments:  'Payments',
    nav_expenses:  'Expenses',
    nav_summary:   'Annual Summary',
    nav_logout:    'Logout',
    login:         'Property Management',
    lbl_password:  'Password',
    login_btn:     'Login',
    login_error:   'Invalid password. Please try again.',

    total_properties: 'Properties',
    occupied:         'Occupied',
    vacant:           'Vacant',
    monthly_rent:     'Total Monthly Rent',
    contract_alerts:  'Contract Expiry Alerts',
    all_properties:   'All Properties',
    days_left:        'days left',
    overdue:          'Overdue',
    expiring_60:      'Expiring within 60 days',
    no_alerts:        'No upcoming contract expirations.',

    billing_title:    'Monthly Billing',
    billing_month:    'Billing Month',
    save_all:         'Save All',
    elec_curr_reading:'Elec Meter Reading (UNIT)',
    elec_prev_reading:'Prev Reading',
    water_curr_reading:'Water Meter Reading (UNIT)',
    water_prev_reading:'Prev Reading',
    print_invoice:    'Print Invoice',
    elec_units:       'units',
    water_fixed:      'Fixed',
    no_util:          'No utilities',
    rent_lbl:         'Rent',
    elec_lbl:         'Elec',
    water_lbl:        'Water',
    commission_lbl:   'Commission',
    total_lbl:        'Total Due',
    saved_ok:         'Saved',
    reading_date:     'Reading Date',
    notes_lbl:        'Notes',
    auto_prev:        'Auto from last month',

    payments_title:   'Payment Tracker',
    add_payment:      'Add Payment',
    payment_date:     'Payment Date',
    billing_month_lbl:'Billing Month',
    amount_lbl:       'Amount (HK$)',
    method_lbl:       'Method',
    method_bank:      'Bank Transfer',
    method_cash:      'Cash',
    method_cheque:    'Cheque',
    method_fps:       'FPS',
    method_atm:       'ATM',
    method_online:    'Online Banking',
    method_other:     'Other',
    tenant_lbl:       'Tenant',
    del_confirm:       'Delete this record?',
    del_confirm_split: 'This payment has a linked adjustment record. Delete both?',
    filter_month:     'Filter by Month',
    filter_tenant:    'Filter by Tenant',
    all_tenants:      'All Tenants',
    receipt_btn:      'Receipt',
    bank_acct_lbl:    'Bank Account',
    verified_lbl:     'Verified in bank statement ✓',
    upload_proof_lbl: 'Upload Proof (bank slip / FPS screenshot)',
    verified_col:     'Verified',
    mark_verified:    'Mark as verified in bank statement?',
    pending_verify:   'Pending verification',
    outstanding_lbl:  'Outstanding',
    balance_settled:  'Settled',
    balance_credit:   'Credit',
    prev_balance_lbl:   'Prev. Balance',
    running_bal_lbl:    'Running Balance',
    pay_diff_short:     'Short by',
    pay_diff_credit:    'Overpaid by',
    pay_diff_carry:     'will carry to next month',
    pay_diff_deduct:    'will deduct next month',
    overpay_detected:   'Overpayment detected',
    overpay_q:          'How would you like to handle this?',
    overpay_option1:    'Carry forward as credit to next month',
    overpay_option2:    'Previous period adjustment (assign to another billing month)',
    overpay_adj_amount: 'Adjustment Amount (HK$)',
    overpay_adj_month:  'Billing month this belongs to',
    overpay_adj_notes:  'Adjustment Notes',
    underpay_info:      'Underpayment — will carry forward as outstanding balance',
    prev_credit_lbl:    'Previous credit',
    prev_outstanding_lbl: 'Previous outstanding',
    viewing_month:      'Viewing',
    pay_status_paid:     'Paid',
    pay_status_grace:    'Due (grace period)',
    pay_status_overdue:  'Overdue',
    pay_status_verified: 'Paid & Verified',
    pay_status_pending:  'Paid, Pending Verification',
    pay_status_unpaid:   'Not Paid',
    dash_legend:         '🟢 Paid & Verified  |  🟡 Paid, Pending Verification  |  🔴 Not Paid',

    expenses_title:   'Expense Tracker',
    add_expense:      'Add Expense',
    expense_date:     'Date',
    category_lbl:     'Category',
    cat_repairs:      'Repairs',
    cat_insurance:    'Insurance',
    cat_govt_rates:   'Rating & Valuation (差餉)',
    cat_govt_rent:    'Govt Rent (地租)',
    cat_handling_fee: 'Handling / Agent Fee',
    cat_stamp_duty:   'Stamp Duty',
    cat_other:        'Other',
    property_lbl:     'Property',
    desc_lbl:         'Description',
    filter_year:      'Fiscal Year',
    by_property:      'By Property',

    summary_title:    'Annual Summary',
    fy_lbl:           'HK Fiscal Year',
    load_summary:     'Load',
    income_section:   'Income by Property',
    expense_section:  'Expenses by Category',
    income_paid:      'Payments Received',
    total_income:     'Total Income',
    total_expenses:   'Total Expenses',
    net_income:       'Net Income',
    per_owner:        'Per Owner (÷5)',
    tax_section:      'HK Property Tax Estimate',
    total_rental:     'Total Rental Income',
    less_govt_rent:   'Less: Govt Rent (地租)',
    less_govt_rates:  'Less: Rating & Valuation (差餉)',
    less_repairs:     'Less: Repairs',
    less_insurance:   'Less: Insurance',
    less_stamp_duty:  'Less: Stamp Duties',
    net_taxable:      'Net Income (after deductions)',
    tax_formula:      'Tax @ (Rental − Govt Rent) × 0.8 × 15%',
    est_tax:          'Estimated Property Tax',
    prop_breakdown:   'Per-Property Tax Breakdown',

    no_data:          'No records found.',
    loading:          'Loading…',
    property_col:     'Property',
    room_col:         'Room',
    tenant_col:       'Tenant',
    date_col:         'Date',
    amount_col:       'Amount',
    method_col:       'Method',
    action_col:       'Action',
    category_col:     'Category',
    description_col:  'Description',
    deposit_lbl:      'Deposit',
    contract_lbl:     'Contract',
    save:             'Save',
    enter_password:   'Enter password',
    cancel:           'Cancel',
  },
  tc: {
    app_title: '物業管理',
    nav_dashboard: '總覽',
    nav_billing:   '每月帳單',
    nav_payments:  '收款記錄',
    nav_expenses:  '支出記錄',
    nav_summary:   '年度摘要',
    nav_logout:    '登出',
    login:         '物業管理系統',
    lbl_password:  '密碼',
    login_btn:     '登入',
    login_error:   '密碼錯誤，請重試。',

    total_properties: '物業數目',
    occupied:         '已租出',
    vacant:           '空置',
    monthly_rent:     '每月租金總計',
    contract_alerts:  '合約到期提示',
    all_properties:   '所有物業',
    days_left:        '天後到期',
    overdue:          '已過期',
    expiring_60:      '60天內到期',
    no_alerts:        '暫無合約即將到期。',

    billing_title:    '每月帳單',
    billing_month:    '帳單月份',
    save_all:         '全部儲存',
    elec_curr_reading:'電錶讀數 (UNIT)',
    elec_prev_reading:'上期讀數',
    water_curr_reading:'水錶讀數 (UNIT)',
    water_prev_reading:'上期讀數',
    print_invoice:    '列印發票',
    elec_units:       '度',
    water_fixed:      '固定水費',
    no_util:          '不包水電',
    rent_lbl:         '租金',
    elec_lbl:         '電費',
    water_lbl:        '水費',
    commission_lbl:   '佣金扣減',
    total_lbl:        '應繳合計',
    saved_ok:         '已儲存',
    reading_date:     '讀錶日期',
    notes_lbl:        '備注',
    auto_prev:        '自動取上月讀數',

    payments_title:   '收款記錄',
    add_payment:      '新增收款',
    payment_date:     '收款日期',
    billing_month_lbl:'帳單月份',
    amount_lbl:       '金額 (HK$)',
    method_lbl:       '付款方式',
    method_bank:      '銀行轉帳',
    method_cash:      '現金',
    method_cheque:    '支票',
    method_fps:       '轉數快',
    method_atm:       'ATM',
    method_online:    '網上銀行',
    method_other:     '其他',
    tenant_lbl:       '租客',
    del_confirm:       '確定刪除此記錄？',
    del_confirm_split: '此付款有關聯的調整記錄，確定一併刪除？',
    filter_month:     '按月份篩選',
    filter_tenant:    '按租客篩選',
    all_tenants:      '所有租客',
    receipt_btn:      '收據',
    bank_acct_lbl:    '銀行帳戶',
    verified_lbl:     '已在銀行記錄核實 ✓',
    upload_proof_lbl: '上傳付款證明（銀行收據 / 轉數快截圖）',
    verified_col:     '核實',
    mark_verified:    '標記此付款已在銀行記錄核實？',
    pending_verify:   '待核實',
    outstanding_lbl:  '未清餘額',
    balance_settled:  '已結清',
    balance_credit:   '預付款',
    prev_balance_lbl:   '上期結餘',
    running_bal_lbl:    '累計結餘',
    pay_diff_short:     '欠款',
    pay_diff_credit:    '多付',
    pay_diff_carry:     '將結轉下月',
    pay_diff_deduct:    '將於下月扣除',
    overpay_detected:   '多付款',
    overpay_q:          '如何處理？',
    overpay_option1:    '結轉至下月作扣除',
    overpay_option2:    '上期調整（分配至其他帳單月份）',
    overpay_adj_amount: '調整金額 (HK$)',
    overpay_adj_month:  '所屬帳單月份',
    overpay_adj_notes:  '調整備注',
    underpay_info:      '欠款 — 將結轉至下月',
    prev_credit_lbl:    '上期預付',
    prev_outstanding_lbl: '上期欠款',
    viewing_month:      '查看',
    pay_status_paid:     '已付',
    pay_status_grace:    '未付（寬限期內）',
    pay_status_overdue:  '逾期未付',
    pay_status_verified: '已付款及已核實',
    pay_status_pending:  '已付款，待核實',
    pay_status_unpaid:   '未付款',
    dash_legend:         '🟢 已付款及已核實  |  🟡 已付款，待核實  |  🔴 未付款',

    expenses_title:   '支出記錄',
    add_expense:      '新增支出',
    expense_date:     '日期',
    category_lbl:     '類別',
    cat_repairs:      '維修',
    cat_insurance:    '保險',
    cat_govt_rates:   '差餉',
    cat_govt_rent:    '地租',
    cat_handling_fee: '代理費 / 手續費',
    cat_stamp_duty:   '印花稅',
    cat_other:        '其他',
    property_lbl:     '物業',
    desc_lbl:         '描述',
    filter_year:      '財政年度',
    by_property:      '按物業分類',

    summary_title:    '年度摘要',
    fy_lbl:           '香港財政年度',
    load_summary:     '載入',
    income_section:   '各物業收入',
    expense_section:  '各類支出',
    income_paid:      '已收款項',
    total_income:     '收入總計',
    total_expenses:   '支出總計',
    net_income:       '淨收入',
    per_owner:        '每位業主（÷5）',
    tax_section:      '香港物業稅估算',
    total_rental:     '租金收入總額',
    less_govt_rent:   '減：地租',
    less_govt_rates:  '減：差餉',
    less_repairs:     '減：維修費',
    less_insurance:   '減：保險費',
    less_stamp_duty:  '減：印花稅',
    net_taxable:      '扣除後淨收入',
    tax_formula:      '稅款 @ (租金 − 地租) × 0.8 × 15%',
    est_tax:          '估計物業稅',
    prop_breakdown:   '各物業稅務明細',

    no_data:          '沒有記錄。',
    loading:          '載入中…',
    property_col:     '物業',
    room_col:         '房間',
    tenant_col:       '租客',
    date_col:         '日期',
    amount_col:       '金額',
    method_col:       '方式',
    action_col:       '操作',
    category_col:     '類別',
    description_col:  '描述',
    deposit_lbl:      '按金',
    contract_lbl:     '合約期',
    save:             '儲存',
    enter_password:   '請輸入密碼',
    cancel:           '取消',
  },
};

// ── State ────────────────────────────────────────────────────────────────────

const S = {
  lang: localStorage.getItem('lang') || 'en',
  token: localStorage.getItem('token') || '',
  view: 'dashboard',
  data: {},
};

function t(k) { return STRINGS[S.lang][k] || k; }

// Due day per property: 1=Woosung, 2=Parkes, 3=Jordan, 4=Pilkem, 5=CarPark
const PROP_DUE_DAYS = { 1: 1, 2: 20, 3: 1, 4: 20, 5: 1 };
const GRACE_DAYS = 7;

// ── API Client ────────────────────────────────────────────────────────────────

const BASE = 'https://property-mgmt.axelvion.workers.dev';

async function apiFetch(path, opts = {}) {
  const res = await fetch(BASE + path, {
    ...opts,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${S.token}`,
      ...(opts.headers || {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

const api = {
  get:    (p)    => apiFetch(p, { method: 'GET' }),
  post:   (p, b) => apiFetch(p, { method: 'POST', body: b }),
  put:    (p, b) => apiFetch(p, { method: 'PUT', body: b }),
  delete: (p)    => apiFetch(p, { method: 'DELETE' }),
};

// ── Formatters ───────────────────────────────────────────────────────────────

function $$(n) { return document.getElementById(n); }
function hk(n) { return 'HK$' + Number(n || 0).toLocaleString('en-HK', { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
function fmtDate(d) { if (!d) return '–'; const loc = S.lang === 'tc' ? 'zh-HK' : 'en-US'; return new Date(d + 'T00:00:00').toLocaleDateString(loc, { day: 'numeric', month: 'short', year: 'numeric' }); }
function fmtMonth(m) { if (!m) return '–'; const [y, mo] = m.split('-'); const loc = S.lang === 'tc' ? 'zh-HK' : 'en-US'; return new Date(+y, +mo - 1).toLocaleDateString(loc, { month: 'long', year: 'numeric' }); }
function ym(d = new Date()) { return d.toISOString().slice(0, 7); }
function today() { return new Date().toISOString().slice(0, 10); }
function fyLabel(fy) { return `${fy}/${String(parseInt(fy) + 1).slice(-2)}`; }
function currentFY() {
  const now = new Date();
  return now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1;
}

function catLabel(c) {
  const map = {
    repairs: t('cat_repairs'), insurance: t('cat_insurance'),
    govt_rates: t('cat_govt_rates'), govt_rent: t('cat_govt_rent'),
    handling_fee: t('cat_handling_fee'), stamp_duty: t('cat_stamp_duty'),
    other: t('cat_other'),
  };
  return map[c] || c;
}

function methodLabel(m) {
  const map = {
    bank_transfer: t('method_bank'), cash: t('method_cash'),
    cheque: t('method_cheque'), fps: t('method_fps'),
    atm: t('method_atm'), online_banking: t('method_online'),
    other: t('method_other'),
  };
  return map[m] || m;
}

// Generate <option> list for past N months from today (for period-adjustment dropdown)
function generateMonthOptions(selectedMonth, count = 24) {
  const now = new Date();
  const opts = [];
  for (let i = 0; i < count; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const val = ym(d);
    opts.push(`<option value="${val}" ${val === selectedMonth ? 'selected' : ''}>${fmtMonth(val)}</option>`);
  }
  return opts.join('');
}

// Build FY <option> list centred on currentFY (±2 years)
function fySelectOptions(selectedFY) {
  const cfY = currentFY();
  const startY = 2026;
  const years = [];
  for (let y = startY; y <= cfY; y++) years.push(y);
  return years
    .map(f => `<option value="${f}" ${f == selectedFY ? 'selected' : ''}>${fyLabel(f)}</option>`)
    .join('');
}

// ── Routing ──────────────────────────────────────────────────────────────────

function navigate(view) {
  S.view = view;
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });
  renderView();
}

async function renderView() {
  const el = $$('view-container');
  el.innerHTML = `<div class="empty-state">${t('loading')}</div>`;
  try {
    switch (S.view) {
      case 'dashboard': await renderDashboard(); break;
      case 'billing':   await renderBilling();   break;
      case 'payments':  await renderPayments();  break;
      case 'expenses':  await renderExpenses();  break;
      case 'summary':   await renderSummary();   break;
    }
  } catch (e) {
    el.innerHTML = `<div class="empty-state text-danger">Error: ${e.message}</div>`;
  }
}

// ── Dashboard ────────────────────────────────────────────────────────────────

async function renderDashboard() {
  if (!S.data.dashMonth) S.data.dashMonth = ym();
  const dashMonth = S.data.dashMonth;
  const data = await api.get(`/api/dashboard?month=${dashMonth}`);
  const { properties, rooms, expiring, totalMonthlyRent, paymentStatusMap = {} } = data;

  const roomsByProp = {};
  rooms.forEach(r => { (roomsByProp[r.property_id] = roomsByProp[r.property_id] || []).push(r); });

  const totalRooms = properties.reduce((s, p) => s + (p.total_rooms || 0), 0);
  const totalOcc   = properties.reduce((s, p) => s + (p.occupied || 0), 0);
  const totalVac   = properties.reduce((s, p) => s + (p.vacant || 0), 0);

  const alertsHtml = expiring.length === 0
    ? `<p class="text-muted" style="padding:12px 0">${t('no_alerts')}</p>`
    : expiring.map(e => {
        const d = e.days_left;
        const daysTxt = d < 0 ? `${-d}d ${t('overdue')}` : `${d} ${t('days_left')}`;
        return `
          <div class="alert-item">
            <span class="alert-icon">⚠️</span>
            <div class="alert-text">
              <strong>${e.name} — ${e.property_code} ${e.room_label}</strong>
              <span>${t('contract_lbl')}: ${fmtDate(e.contract_start)} – ${fmtDate(e.contract_end)}</span>
            </div>
            <span class="alert-days ${d < 0 ? 'overdue' : ''}">${daysTxt}</span>
          </div>`;
      }).join('');

  const propsHtml = properties.map(p => {
    const pRooms = roomsByProp[p.id] || [];
    const roomsHtml = pRooms.map(r => {
      const isExpiring = expiring.some(e => e.property_id === r.property_id && e.room_label === r.room_label);
      const statusCls = r.status === 'vacant' ? 'status-vacant' : (isExpiring ? 'status-expiring' : 'status-occupied');
      const statusTxt = r.status === 'vacant' ? t('vacant') : (isExpiring ? t('expiring_60') : t('occupied'));

      let payDotHtml = '';
      if (r.status !== 'vacant' && r.tenant_id) {
        const ps = paymentStatusMap[r.tenant_id]; // 'verified' | 'pending' | undefined
        const dotCls   = ps === 'verified' ? 'pay-dot-green' : ps === 'pending' ? 'pay-dot-yellow' : 'pay-dot-red';
        const dotTitle = ps === 'verified' ? t('pay_status_verified') : ps === 'pending' ? t('pay_status_pending') : t('pay_status_unpaid');
        payDotHtml = `<span class="pay-dot ${dotCls}" title="${dotTitle}"></span>`;
      }

      // Amount to display: full invoice total if billed, else base rent
      const displayAmt = r.total_bill != null ? r.total_bill : r.rent;

      // Per-month balance: invoice minus payments this month (only when billing exists)
      let balBadgeHtml = '';
      if (r.status !== 'vacant' && r.tenant_id) {
        const monthBal = r.total_bill != null
          ? r.total_bill - (r.total_paid_month || 0)
          : null;
        const outstanding = r.outstanding_balance || 0;
        if (monthBal != null && Math.abs(monthBal) >= 5) {
          if (monthBal > 0) {
            balBadgeHtml = `<span class="bal-badge bal-badge-owed" style="background:#dc2626;color:#fff" title="${t('outstanding_lbl')}">+${hk(monthBal)}</span>`;
          } else {
            balBadgeHtml = `<span class="bal-badge bal-badge-credit" title="${t('balance_credit')}">${hk(-monthBal)}</span>`;
          }
        } else if (monthBal !== null && Math.abs(outstanding) >= 1) {
          // Month within $5 threshold but outstanding_balance reflects a real carry-over difference
          if (outstanding > 0) {
            balBadgeHtml = `<span class="bal-badge bal-badge-owed" style="background:#dc2626;color:#fff" title="${t('outstanding_lbl')}">+${hk(outstanding)}</span>`;
          } else {
            balBadgeHtml = `<span class="bal-badge bal-badge-credit" title="${t('balance_credit')}">${hk(-outstanding)}</span>`;
          }
        }
      }

      return `
        <div class="room-row">
          <span class="room-label">${r.room_label}</span>
          <span class="room-tenant">${r.tenant_name || '—'}</span>
          <span class="room-rent">${displayAmt ? hk(displayAmt) : '–'}</span>
          <span class="room-status ${statusCls}">${statusTxt}</span>
          ${payDotHtml}${balBadgeHtml}
        </div>`;
    }).join('');

    return `
      <div class="prop-card">
        <div class="prop-card-header">
          <div>
            <div class="prop-code">${p.code}</div>
            <div class="prop-address">${p.address}</div>
          </div>
          <div style="text-align:right">
            <div class="prop-bank">${p.bank_name}</div>
            <div style="font-size:11px;opacity:.6">${p.bank_account}</div>
          </div>
        </div>
        <div class="prop-rooms">${roomsHtml}</div>
      </div>`;
  }).join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('nav_dashboard')}</h2>
      <div class="month-nav">
        <button class="btn btn-ghost btn-sm" onclick="navDashMonth(-1)" ${dashMonth <= '2026-04' ? 'disabled' : ''}>&#8592;</button>
        <span class="month-nav-label">${t('viewing_month')}: <strong>${fmtMonth(dashMonth)}</strong></span>
        <button class="btn btn-ghost btn-sm" onclick="navDashMonth(1)" ${dashMonth >= ym() ? 'disabled' : ''}>&#8594;</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">${t('total_properties')}</div>
        <div class="stat-value">${properties.length}</div>
      </div>
      <div class="stat-card green">
        <div class="stat-label">${t('occupied')}</div>
        <div class="stat-value">${totalOcc} / ${totalRooms}</div>
      </div>
      <div class="stat-card red">
        <div class="stat-label">${t('vacant')}</div>
        <div class="stat-value">${totalVac}</div>
      </div>
      <div class="stat-card amber">
        <div class="stat-label">${t('monthly_rent')}</div>
        <div class="stat-value" style="font-size:20px">${hk(totalMonthlyRent)}</div>
      </div>
    </div>

    ${expiring.length > 0 ? `
    <div class="section mb-16">
      <div class="section-header"><h3>⚠️ ${t('contract_alerts')}</h3></div>
      <div class="section-body"><div class="alert-list">${alertsHtml}</div></div>
    </div>` : ''}

    <div class="section-header" style="margin-bottom:16px">
      <h3 style="font-size:16px;font-weight:700">${t('all_properties')}</h3>
    </div>
    <div class="property-grid">${propsHtml}</div>
    <div class="dash-legend">${t('dash_legend')}</div>`;
}

function navDashMonth(dir) {
  const MIN_MONTH = '2026-04';
  const MAX_MONTH = ym();
  const [y, m] = (S.data.dashMonth || ym()).split('-').map(Number);
  const next = ym(new Date(y, m - 1 + dir));
  if (next < MIN_MONTH || next > MAX_MONTH) return;
  S.data.dashMonth = next;
  renderDashboard();
}

function changeGlobalFY(fy) {
  S.data.globalFY = parseInt(fy);
  S.data.dashMonth = `${fy}-04`;
  const sel = document.getElementById('global-fy-select');
  if (sel) sel.value = fy;
  renderView();
}

// ── Billing ──────────────────────────────────────────────────────────────────

async function renderBilling() {
  const month = S.data.billingMonth || ym();
  S.data.billingMonth = month;

  const [tenants, existingRows, properties] = await Promise.all([
    api.get('/api/tenants'),
    api.get(`/api/billing?month=${month}`),
    api.get('/api/properties'),
  ]);

  const existingMap = {};
  existingRows.forEach(r => { existingMap[r.room_id] = r; });

  // Store context for printInvoice and calcBilling
  const propByCode = {};
  const propById = {};
  properties.forEach(p => { propByCode[p.code] = p; propById[p.id] = p; });
  window._billingCtx = { tenantByRoom: {}, propByCode, month, prevBalByRoom: {}, prevMonthByRoom: {} };
  tenants.forEach(t_ => { window._billingCtx.tenantByRoom[t_.room_id] = t_; });

  // Fetch last readings for all rooms with meters (in parallel)
  const meterRooms = tenants.filter(t_ => t_.elec_rate > 0 || t_.water_type === 'meter');
  const lastReadings = {};
  await Promise.all(meterRooms.map(async t_ => {
    if (existingMap[t_.room_id]) return; // already have data for this month
    try {
      const lr = await api.get(`/api/billing/last-reading?room_id=${t_.room_id}&before_month=${month}`);
      lastReadings[t_.room_id] = lr;
    } catch { /* ignore */ }
  }));

  let lastPropId = null;
  const unitCards = tenants.map(t_ => {
    let groupHeader = '';
    if (t_.property_id !== lastPropId) {
      const prop = propById[t_.property_id];
      const label = prop ? `${prop.code} — ${prop.address}` : t_.property_code;
      const spacer = lastPropId !== null ? '<div style="height:20px"></div>' : '';
      groupHeader = `${spacer}<div class="prop-group-header">${label}</div>`;
      lastPropId = t_.property_id;
    }
    const ex = existingMap[t_.room_id] || {};
    const lr = lastReadings[t_.room_id] || {};
    const hasElec  = t_.elec_rate > 0;
    const hasMeterWater = t_.water_type === 'meter';
    const hasFixedWater = t_.water_type === 'fixed';

    const fmtReading = v => (v !== '' && v !== undefined && v !== null) ? Number(v) : '';
    const prevElec  = ex.elec_prev  !== undefined ? ex.elec_prev  : (lr.elec_curr  !== null && lr.elec_curr  !== undefined ? lr.elec_curr  : '');
    const prevWater = ex.water_prev !== undefined ? ex.water_prev : (lr.water_curr !== null && lr.water_curr !== undefined ? lr.water_curr : '');
    const currElec  = ex.elec_curr  !== undefined ? ex.elec_curr  : '';
    const currWater = ex.water_curr !== undefined ? ex.water_curr : '';

    const prevElecLabel = lr.billing_month ? `${t('auto_prev')}: ${lr.billing_month}` : t('elec_prev_reading');
    const prevWaterLabel = lr.billing_month ? `${t('auto_prev')}: ${lr.billing_month}` : t('water_prev_reading');

    const balanceHtml = (() => {
      if (!ex.id) return '';
      const paid = ex.total_paid_month || 0;
      const bal  = ex.running_balance !== undefined ? ex.running_balance : null;
      const parts = [];
      if (paid > 0) parts.push(`<span class="bal-paid">✓ ${t('pay_status_paid')}: <strong>${hk(paid)}</strong></span>`);
      if (bal !== null) {
        if (bal > 0.01) parts.push(`<span class="bal-owed">⚠ ${t('outstanding_lbl')}: <strong>${hk(bal)}</strong></span>`);
        else if (bal < -0.01) parts.push(`<span class="bal-credit">▲ ${t('balance_credit')}: <strong>${hk(-bal)}</strong></span>`);
        else parts.push(`<span class="bal-settled">✓ ${t('balance_settled')}</span>`);
      }
      return parts.length ? `<div class="billing-balance">${parts.join('')}</div>` : '';
    })();

    // Use clean prev_balance from DB (FY-scoped: previous months billed minus previous months paid)
    const rawPrevBal = ex.id ? (ex.prev_balance || 0) : (t_.outstanding_balance || 0);
    // Apply $5 minimum threshold — tiny rounding differences are treated as settled
    const prevBal   = Math.abs(rawPrevBal) < 5 ? 0 : rawPrevBal;
    const prevMonth = ex.id ? (ex.prev_billing_month || null) : (t_.last_billing_month || null);
    // Compute total_bill from stored components as fallback if stored value is 0
    const computedBill = (ex.rent_amount || 0) + (ex.elec_amount || 0) + (ex.water_amount || 0) - (ex.commission_applied || 0);
    const displayBill  = ex.id ? ((ex.total_bill > 0 ? ex.total_bill : computedBill)) : 0;
    const totalDue     = ex.id ? (displayBill + prevBal) : (t_.outstanding_balance || 0);

    // Store in context for printInvoice and calcBilling
    window._billingCtx.prevBalByRoom[t_.room_id]   = prevBal;
    window._billingCtx.prevMonthByRoom[t_.room_id] = prevMonth;

    const prevMonthLabel = prevMonth ? fmtMonth(prevMonth) : '';
    const prevBalHtml = (Math.abs(prevBal) > 0.01) ? `
      <div class="prev-balance-info ${prevBal > 0 ? 'prev-owed' : 'prev-credit'}">
        ${prevBal > 0
          ? `⚠ ${t('prev_outstanding_lbl')}${prevMonthLabel ? ` (${t('from_lbl') || 'from'} ${prevMonthLabel})` : ''}: <strong>+${hk(prevBal)}</strong> — added to Total Due`
          : `▲ ${t('prev_credit_lbl')}${prevMonthLabel ? ` (${t('from_lbl') || 'from'} ${prevMonthLabel})` : ''}: <strong>−${hk(-prevBal)}</strong> — deducted from Total Due`
        }
      </div>` : '';

    const calcPreview = ex.id ? `
      <div class="billing-calc">
        ${prevBal > 0.01  ? `<span class="text-danger">${t('prev_outstanding_lbl')}${prevMonthLabel ? ` (${prevMonthLabel})` : ''}: <strong>+${hk(prevBal)}</strong></span>` : ''}
        ${prevBal < -0.01 ? `<span class="text-success">${t('prev_credit_lbl')}${prevMonthLabel ? ` (${prevMonthLabel})` : ''}: <strong>−${hk(-prevBal)}</strong></span>` : ''}
        <span>${t('rent_lbl')}: <strong>${hk(ex.rent_amount)}</strong></span>
        ${hasElec ? `<span>${t('elec_lbl')}: <strong>${ex.elec_units}u × $${t_.elec_rate} = ${hk(ex.elec_amount)}</strong></span>` : ''}
        ${hasMeterWater ? `<span>${t('water_lbl')}: <strong>${ex.water_units}u × $${t_.water_rate} = ${hk(ex.water_amount)}</strong></span>` : ''}
        ${hasFixedWater ? `<span>${t('water_lbl')}: <strong>${hk(ex.water_amount)}</strong></span>` : ''}
        ${ex.commission_applied > 0 ? `<span class="text-danger">${t('commission_lbl')}: <strong>−${hk(ex.commission_applied)}</strong></span>` : ''}
        <span class="billing-total">${t('total_lbl')}: ${hk(totalDue)}</span>
        <button class="btn btn-danger btn-sm" onclick="deleteBilling(${ex.id}, '${month}')">✕</button>
      </div>
      ${balanceHtml}` : prevBalHtml;

    return groupHeader + `
      <div class="billing-unit-card" id="bc-${t_.room_id}">
        <div class="billing-unit-header">
          <span class="billing-badge">${t_.property_code} ${t_.room_label}</span>
          <span class="billing-tenant-name">${t_.name}</span>
          <span class="billing-rent">${hk(t_.rent)}/mo</span>
          ${t_.commission > 0 ? `<span class="badge badge-amber" title="${t('commission_lbl')}">−${hk(t_.commission)}</span>` : ''}
        </div>
        <div class="billing-fields">
          <div class="form-group">
            <label>${t('reading_date')}</label>
            <input type="date" id="rd-${t_.room_id}" value="${ex.reading_date || today()}" />
          </div>
          ${hasElec ? `
          <div class="form-group">
            <label>${t('elec_curr_reading')}</label>
            <input type="number" id="ec-${t_.room_id}" value="${fmtReading(currElec)}" placeholder="0"
              oninput="calcBilling(${t_.room_id}, ${t_.elec_rate}, '${t_.water_type}', ${t_.water_rate}, ${t_.rent}, ${t_.commission || 0})" />
          </div>
          <div class="form-group">
            <label style="color:var(--muted)">${prevElecLabel}</label>
            <input type="number" id="ep-${t_.room_id}" value="${fmtReading(prevElec)}" placeholder="0" style="background:#f8fafc"
              oninput="calcBilling(${t_.room_id}, ${t_.elec_rate}, '${t_.water_type}', ${t_.water_rate}, ${t_.rent}, ${t_.commission || 0})" />
          </div>` : `<div class="form-group"><label style="opacity:.5">${t('elec_lbl')}</label><div style="padding:8px;color:var(--muted);font-size:12px">${t('no_util')}</div></div>`}
          ${hasMeterWater ? `
          <div class="form-group">
            <label>${t('water_curr_reading')}</label>
            <input type="number" id="wc-${t_.room_id}" value="${fmtReading(currWater)}" placeholder="0"
              oninput="calcBilling(${t_.room_id}, ${t_.elec_rate}, '${t_.water_type}', ${t_.water_rate}, ${t_.rent}, ${t_.commission || 0})" />
          </div>
          <div class="form-group">
            <label style="color:var(--muted)">${prevWaterLabel}</label>
            <input type="number" id="wp-${t_.room_id}" value="${fmtReading(prevWater)}" placeholder="0" style="background:#f8fafc"
              oninput="calcBilling(${t_.room_id}, ${t_.elec_rate}, '${t_.water_type}', ${t_.water_rate}, ${t_.rent}, ${t_.commission || 0})" />
          </div>` : (hasFixedWater ? `
          <div class="form-group">
            <label>${t('water_lbl')}</label>
            <div style="padding:8px;font-weight:600;color:var(--success)">${t('water_fixed')}: ${hk(t_.water_rate)}</div>
          </div>` : `
          <div class="form-group">
            <label style="opacity:.5">${t('water_lbl')}</label>
            <div style="padding:8px;color:var(--muted);font-size:12px">${t('no_util')}</div>
          </div>`)}
          <div class="form-group" style="grid-column:1/-1">
            <label>${t('notes_lbl')}</label>
            <input type="text" id="nt-${t_.room_id}" value="${ex.notes || ''}" />
          </div>
        </div>
        <div id="bc-preview-${t_.room_id}">${calcPreview}</div>
        <div style="margin-top:10px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <button class="btn btn-primary btn-sm" onclick="saveBillingUnit(${t_.room_id}, ${t_.elec_rate}, '${t_.water_type}', ${t_.water_rate}, ${t_.commission || 0})">
            💾 ${t('save')}
          </button>
          <button class="btn btn-ghost btn-sm" onclick="printInvoice(${t_.room_id})">
            🖨 ${t('print_invoice')}
          </button>
          <span id="bc-msg-${t_.room_id}" style="font-size:12px;color:var(--success)"></span>
        </div>
      </div>`;
  }).join('');

  const isMarch = month.endsWith('-03');
  const marchWarning = isMarch ? `
    <div style="background:#fef3c7;border:1.5px solid #fbbf24;border-radius:6px;padding:10px 14px;margin-bottom:16px;font-size:13px;color:#92400e">
      ⚠ <strong>Fiscal Year End (March):</strong> Outstanding balances from this fiscal year will <strong>not</strong> carry forward to next year (April). Each fiscal year starts fresh. Please resolve any outstanding balances before the end of March.
    </div>` : '';

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('billing_title')}</h2>
    </div>
    ${marchWarning}
    <div class="section">
      <div class="section-header">
        <h3>${t('billing_month')}</h3>
        <div class="month-selector">
          <input type="month" id="billing-month-input" value="${month}" onchange="changeBillingMonth(this.value)" />
        </div>
      </div>
      <div class="section-body">${unitCards || `<div class="empty-state">${t('no_data')}</div>`}</div>
    </div>`;

  if (S.data._savedMsg) {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;top:20px;right:24px;background:#16a34a;color:#fff;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:600;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)';
    toast.textContent = S.data._savedMsg;
    document.body.appendChild(toast);
    S.data._savedMsg = null;
    setTimeout(() => toast.remove(), 3000);
  }
}

function changeBillingMonth(val) {
  S.data.billingMonth = val;
  renderBilling();
}

function calcBilling(roomId, elecRate, waterType, waterRate, rent, commission) {
  const ep = parseFloat($$(`ep-${roomId}`)?.value) || 0;
  const ec = parseFloat($$(`ec-${roomId}`)?.value) || 0;
  const wp = parseFloat($$(`wp-${roomId}`)?.value) || 0;
  const wc = parseFloat($$(`wc-${roomId}`)?.value) || 0;
  const elecUnits = Math.max(0, ec - ep);
  const elecAmt   = elecUnits * elecRate;
  let waterAmt = 0, waterUnits = 0;
  if (waterType === 'meter') { waterUnits = Math.max(0, wc - wp); waterAmt = waterUnits * waterRate; }
  else if (waterType === 'fixed') { waterAmt = waterRate; }
  const monthCharges   = (rent || 0) + elecAmt + waterAmt - (commission || 0);
  const pb             = window._billingCtx?.prevBalByRoom?.[roomId] || 0;
  const prevMonth      = window._billingCtx?.prevMonthByRoom?.[roomId] || null;
  const runningBalance = pb + monthCharges;
  const prevMonthLabel = prevMonth ? fmtMonth(prevMonth) : '';
  const prev = $$(`bc-preview-${roomId}`);
  if (prev) {
    prev.innerHTML = `
      <div class="billing-calc" style="margin-top:8px">
        ${pb > 0.01  ? `<span class="text-danger">${t('prev_outstanding_lbl')}${prevMonthLabel ? ` (${prevMonthLabel})` : ''}: <strong>+${hk(pb)}</strong></span>` : ''}
        ${pb < -0.01 ? `<span class="text-success">${t('prev_credit_lbl')}${prevMonthLabel ? ` (${prevMonthLabel})` : ''}: <strong>−${hk(-pb)}</strong></span>` : ''}
        <span>${t('rent_lbl')}: <strong>${hk(rent || 0)}</strong></span>
        ${elecRate > 0 ? `<span>${t('elec_lbl')}: <strong>${elecUnits}u × $${elecRate} = ${hk(elecAmt)}</strong></span>` : ''}
        ${waterType === 'meter' ? `<span>${t('water_lbl')}: <strong>${waterUnits}u × $${waterRate} = ${hk(waterAmt)}</strong></span>` : ''}
        ${waterType === 'fixed' ? `<span>${t('water_lbl')}: <strong>${hk(waterAmt)}</strong></span>` : ''}
        ${commission > 0 ? `<span class="text-danger">${t('commission_lbl')}: <strong>−${hk(commission)}</strong></span>` : ''}
        <span class="billing-total">${t('total_lbl')}: ${hk(runningBalance)}</span>
      </div>`;
  }
}

async function saveBillingUnit(roomId, elecRate, waterType, waterRate, commission) {
  const month = S.data.billingMonth || ym();
  const payload = {
    room_id: roomId,
    billing_month: month,
    reading_date: $$(`rd-${roomId}`)?.value || today(),
    elec_prev:  parseFloat($$(`ep-${roomId}`)?.value) || 0,
    elec_curr:  parseFloat($$(`ec-${roomId}`)?.value) || 0,
    water_prev: parseFloat($$(`wp-${roomId}`)?.value) || 0,
    water_curr: parseFloat($$(`wc-${roomId}`)?.value) || 0,
    notes: $$(`nt-${roomId}`)?.value || '',
  };
  try {
    const res = await api.post('/api/billing', payload);
    S.data._savedMsg = `✓ ${t('saved_ok')} — ${t('total_lbl')}: ${hk(res.total_bill)}`;
    await renderBilling();
  } catch (e) { alert(e.message); }
}

async function deleteBilling(id, month) {
  if (!confirm(t('del_confirm'))) return;
  await api.delete(`/api/billing/${id}`);
  S.data.billingMonth = month;
  renderBilling();
}

// ── Invoice (Vivian's format) ─────────────────────────────────────────────────

function printInvoice(roomId) {
  const ctx = window._billingCtx;
  if (!ctx) { alert('Please load the billing page first.'); return; }

  const tenant = ctx.tenantByRoom[roomId];
  if (!tenant) return;
  const prop = ctx.propByCode[tenant.property_code];
  if (!prop) return;

  const month  = ctx.month;
  const ep     = parseFloat($$(`ep-${roomId}`)?.value) || 0;
  const ec     = parseFloat($$(`ec-${roomId}`)?.value) || 0;
  const wp     = parseFloat($$(`wp-${roomId}`)?.value) || 0;
  const wc     = parseFloat($$(`wc-${roomId}`)?.value) || 0;
  const rdDate = $$(`rd-${roomId}`)?.value || today();

  const hasElec       = tenant.elec_rate > 0;
  const hasMeterWater = tenant.water_type === 'meter';
  const hasFixedWater = tenant.water_type === 'fixed';

  const elecUnits  = hasElec       ? Math.max(0, ec - ep) : 0;
  const elecAmt    = hasElec       ? elecUnits * tenant.elec_rate : 0;
  const waterUnits = hasMeterWater ? Math.max(0, wc - wp) : 0;
  const waterAmt   = hasMeterWater ? waterUnits * tenant.water_rate
                   : hasFixedWater ? tenant.water_rate : 0;

  const commission  = tenant.commission || 0;
  const subtotal    = tenant.rent + elecAmt + waterAmt;
  const billAmt     = subtotal - commission;
  const prevBal     = window._billingCtx?.prevBalByRoom?.[roomId] || 0;
  const prevMonthInv = window._billingCtx?.prevMonthByRoom?.[roomId] || null;
  const total       = billAmt + prevBal;
  const monthLabel  = fmtMonth(month);

  // Lines matching Vivian's format
  const fmtAmt = v => Number(v).toLocaleString('en-HK', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  const elecLine  = hasElec
    ? `Electricity bill: $${tenant.elec_rate} unit x ${elecUnits} = HK$${fmtAmt(elecAmt)}`
    : '';
  const waterLine = hasMeterWater
    ? `Water bill: $${tenant.water_rate} unit x ${waterUnits} = HK$${fmtAmt(waterAmt)}`
    : hasFixedWater
    ? `Water bill (fixed): HK$${fmtAmt(waterAmt)}`
    : '';
  const commLine  = commission > 0
    ? `<div class="inv-line">Less: commission (HK$${fmtAmt(commission)})</div>` : '';
  const prevBalLine = Math.abs(prevBal) > 0.01
    ? (prevBal > 0
        ? `<div class="inv-line" style="color:#dc2626">Previous outstanding${prevMonthInv ? ` (from ${fmtMonth(prevMonthInv)})` : ''}: +HK$${fmtAmt(prevBal)}</div>`
        : `<div class="inv-line" style="color:#16a34a">Previous credit${prevMonthInv ? ` (from ${fmtMonth(prevMonthInv)})` : ''}: -HK$${fmtAmt(-prevBal)}</div>`)
    : '';

  const rdFormatted = rdDate ? new Date(rdDate + 'T00:00:00').toLocaleDateString('en-HK', { day:'2-digit', month:'2-digit', year:'numeric' }) : rdDate;

  const win = window.open('', '_blank', 'width=820,height=700');
  win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<title>Invoice – ${prop.code} Room ${tenant.room_label} – ${month}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; font-size: 13px; color: #000;
         padding: 48px 56px; max-width: 720px; margin: auto; line-height: 1.9; }
  h1 { text-align: center; font-size: 15px; font-weight: 700; margin-bottom: 28px; }
  .inv-line { margin-bottom: 2px; }
  .inv-line-gap { margin-bottom: 16px; }
  .inv-total { font-weight: 700; margin-top: 4px; margin-bottom: 20px; }
  .inv-notice { margin-top: 6px; margin-bottom: 28px; font-size: 13px; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 8px; }
  th { background: #e8e8e8; border: 1px solid #999; padding: 5px 4px;
       text-align: center; font-weight: 700; white-space: nowrap; }
  td { border: 1px solid #bbb; padding: 5px 4px; text-align: center; }
  .print-btn { margin-top: 24px; text-align: center; }
  .print-btn button { padding: 10px 24px; background: #2563eb; color: #fff;
    border: none; border-radius: 6px; font-size: 14px; cursor: pointer; }
  @media print { .print-btn { display: none; } }
</style>
</head>
<body>
<h1>${prop.address}</h1>

<div class="inv-line">Room ${tenant.room_label} : Rent for the month of ${monthLabel} &nbsp;&nbsp;&nbsp; HK$${fmtAmt(tenant.rent)}</div>
${elecLine  ? `<div class="inv-line">${elecLine}</div>`  : ''}
${waterLine ? `<div class="inv-line">${waterLine}</div>` : ''}
${commLine}
${prevBalLine}
<div class="inv-total inv-line-gap">Total charges : HK$${fmtAmt(total)}</div>

<div class="inv-notice">Please make payment <strong>HK$${fmtAmt(total)}</strong> into ${prop.bank_name} a/c ${prop.bank_account} payable to WONG YUK CHING</div>

<p style="margin-bottom:6px;font-size:12px">Reading Date: ${rdFormatted}</p>
<table>
  <thead>
    <tr>
      <th style="text-align:left;width:38%"></th>
      <th>Electricity</th>
      <th>Water</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left;font-weight:600">Current Reading</td>
      <td>${hasElec ? ec : '–'}</td>
      <td>${hasMeterWater ? wc : '–'}</td>
    </tr>
    <tr>
      <td style="text-align:left;font-weight:600">Previous Reading</td>
      <td>${hasElec ? ep : '–'}</td>
      <td>${hasMeterWater ? wp : '–'}</td>
    </tr>
    <tr>
      <td style="text-align:left;font-weight:600">Units Used</td>
      <td>${hasElec ? elecUnits : '–'}</td>
      <td>${hasMeterWater ? waterUnits : '–'}</td>
    </tr>
  </tbody>
</table>

<div class="print-btn">
  <button onclick="window.print()">🖨 Print Invoice</button>
</div>
</body>
</html>`);
  win.document.close();
}

// ── Payments ─────────────────────────────────────────────────────────────────

async function renderPayments() {
  const month = S.data.payMonth || '';
  const tenantFilter = S.data.payTenantId || '';
  const payFY = S.data.globalFY !== undefined ? S.data.globalFY : currentFY();

  const params = new URLSearchParams();
  if (month) params.set('month', month);
  if (tenantFilter) params.set('tenant_id', tenantFilter);
  if (!month) params.set('fy', payFY);

  const [payments, tenants, properties] = await Promise.all([
    api.get(`/api/payments?${params}`),
    api.get('/api/tenants'),
    api.get('/api/properties'),
  ]);

  const propByCode = {};
  properties.forEach(p => { propByCode[p.code] = p; });

  const tenantOptions = tenants.map(t_ =>
    `<option value="${t_.id}" ${tenantFilter == t_.id ? 'selected' : ''}>${t_.property_code} ${t_.room_label} — ${t_.name}</option>`
  ).join('');

  const sortedPayments = [...payments].sort((a, b) => {
    if (a.property_code < b.property_code) return -1;
    if (a.property_code > b.property_code) return 1;
    if (a.room_label < b.room_label) return -1;
    if (a.room_label > b.room_label) return 1;
    return new Date(b.payment_date) - new Date(a.payment_date);
  });

  let lastPayPropCode = null;
  const payRowsArr = [];
  if (sortedPayments.length === 0) {
    payRowsArr.push(`<tr><td colspan="10" class="empty-state">${t('no_data')}</td></tr>`);
  } else {
    sortedPayments.forEach(p => {
      if (p.property_code !== lastPayPropCode) {
        const prop = propByCode[p.property_code];
        const label = prop ? `${p.property_code} — ${prop.address}` : p.property_code;
        if (lastPayPropCode !== null) {
          payRowsArr.push(`<tr class="prop-group-spacer"><td colspan="10"></td></tr>`);
        }
        payRowsArr.push(`<tr class="prop-table-header"><td colspan="10">${label}</td></tr>`);
        lastPayPropCode = p.property_code;
      }
      const isVerified = p.verified === 1 || p.verified === true;
      const verifyBadge = isVerified
        ? `<span class="verify-badge verify-ok" title="${t('verified_lbl')}">✓</span>`
        : `<span class="verify-badge verify-pending" title="${t('pending_verify')}" style="cursor:pointer" onclick="markPaymentVerified(${p.id})">⏳</span>`;
      const splitBadge = p.split_group
        ? `<span style="font-size:10px;color:#6b7280;margin-left:4px" title="Linked split record">⇄</span>`
        : '';
      payRowsArr.push(`
        <tr>
          <td>${p.property_code}</td>
          <td>${p.room_label}</td>
          <td>${p.tenant_name}</td>
          <td>${p.billing_month ? fmtMonth(p.billing_month) : '–'}</td>
          <td>${fmtDate(p.payment_date)}</td>
          <td class="td-money">${hk(p.amount)}</td>
          <td>${methodLabel(p.method)}</td>
          <td style="word-wrap:break-word;white-space:normal">${p.notes || ''}${splitBadge}</td>
          <td style="text-align:center">${verifyBadge}</td>
          <td style="white-space:nowrap">
            <button class="btn btn-danger btn-sm" onclick="deletePayment(${p.id}, ${!!p.split_group})">✕</button>
          </td>
        </tr>`);
    });
  }
  const rows = payRowsArr.join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('payments_title')}</h2>
      <button class="btn btn-primary" onclick="showAddPayment()">${t('add_payment')}</button>
    </div>
    <div class="section mb-16">
      <div class="section-header">
        <h3>${t('filter_month')}</h3>
        <div style="display:flex;gap:10px;align-items:center">
          <input type="month" value="${month}" onchange="S.data.payMonth=this.value; renderPayments()" />
          <select onchange="S.data.payTenantId=this.value; renderPayments()">
            <option value="">${t('all_tenants')}</option>
            ${tenantOptions}
          </select>
          <button class="btn btn-ghost btn-sm" onclick="S.data.payMonth='';S.data.payTenantId='';renderPayments()">✕</button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t('property_col')}</th><th>${t('room_col')}</th><th>${t('tenant_col')}</th>
              <th>${t('billing_month_lbl')}</th><th>${t('date_col')}</th>
              <th class="td-right">${t('amount_col')}</th><th>${t('method_col')}</th>
              <th>${t('notes_lbl')}</th><th style="text-align:center">${t('verified_col')}</th><th></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

function showAddPayment() {
  Promise.all([
    api.get('/api/tenants'),
    api.get('/api/properties'),
  ]).then(([tenants, properties]) => {
    const propMap = {};
    properties.forEach(p => { propMap[p.id] = p; });
    window._payFormCtx = { tenantMap: {}, propMap };
    tenants.forEach(t_ => { window._payFormCtx.tenantMap[t_.id] = t_; });
    window._proofImage = null;

    const tenantOpts = tenants.map(t_ =>
      `<option value="${t_.id}">${t_.property_code} ${t_.room_label} — ${t_.name}</option>`
    ).join('');

    openModal(t('add_payment'), `
      <form id="pay-form" onsubmit="submitPayment(event)">
        <div class="form-grid">
          <div class="form-group">
            <label>${t('tenant_lbl')}</label>
            <select id="pay-tenant" required onchange="updatePayBankInfo(); updatePaymentDiff()">${tenantOpts}</select>
          </div>
          <div class="form-group">
            <label>${t('bank_acct_lbl')}</label>
            <div id="pay-bank-info" class="bank-info-box">–</div>
          </div>
          <div class="form-group">
            <label>${t('billing_month_lbl')}</label>
            <input type="month" id="pay-month" value="${ym()}" onchange="updatePaymentDiff()" />
          </div>
          <div class="form-group">
            <label>${t('payment_date')}</label>
            <input type="date" id="pay-date" value="${today()}" required />
          </div>
          <div class="form-group">
            <label>${t('amount_lbl')}</label>
            <input type="number" id="pay-amount" step="0.01" min="0" required placeholder="0" oninput="updatePaymentDiff()" />
          </div>
          <div class="form-group full" id="pay-diff-wrap" style="display:none">
            <div id="pay-diff-info" class="pay-diff-info"></div>
          </div>
          <div class="form-group">
            <label>${t('method_lbl')}</label>
            <select id="pay-method">
              <option value="bank_transfer">${t('method_bank')}</option>
              <option value="fps">${t('method_fps')}</option>
              <option value="atm">${t('method_atm')}</option>
              <option value="online_banking">${t('method_online')}</option>
              <option value="cash">${t('method_cash')}</option>
              <option value="cheque">${t('method_cheque')}</option>
              <option value="other">${t('method_other')}</option>
            </select>
          </div>
          <div class="form-group full">
            <label>${t('notes_lbl')}</label>
            <input type="text" id="pay-notes" placeholder="Optional" />
          </div>
          <div class="form-group full">
            <label style="display:flex;align-items:center;gap:8px;cursor:pointer;text-transform:none;font-size:13px;font-weight:600">
              <input type="checkbox" id="pay-verified" style="width:16px;height:16px;flex-shrink:0;cursor:pointer" />
              ${t('verified_lbl')}
            </label>
          </div>
          <div class="form-group full">
            <label>${t('upload_proof_lbl')}</label>
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
              <label class="btn btn-ghost btn-sm" style="cursor:pointer;margin:0">
                📎 Upload
                <input type="file" id="pay-proof" accept="image/*" style="display:none" onchange="handleProofUpload(this)" />
              </label>
              <span id="pay-proof-filename" style="font-size:12px;color:var(--muted)"></span>
            </div>
            <div id="pay-proof-preview" style="margin-top:8px"></div>
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-ghost" onclick="closeModal()">${t('cancel')}</button>
          <button type="submit" class="btn btn-primary">💾 ${t('save')}</button>
        </div>
      </form>`);

    updatePayBankInfo();
  });
}

async function submitPayment(e) {
  e.preventDefault();
  const tenantId     = parseInt($$('pay-tenant').value);
  const billingMonth = $$('pay-month').value || null;
  const payDate      = $$('pay-date').value;
  const amount       = parseFloat($$('pay-amount').value);
  const method       = $$('pay-method').value;
  const notes        = $$('pay-notes').value || null;
  const verified     = $$('pay-verified').checked ? 1 : 0;

  if (window._payOverpayOption === 'adjust' && (window._payOverpayDiff || 0) > 0.01) {
    const adjAmount = parseFloat($$('overpay-adj-amount')?.value) || window._payOverpayDiff;
    const adjMonth  = $$('overpay-adj-month')?.value || null;
    const mainAmt   = amount - adjAmount;
    const splitGroup = mainAmt > 0.005 ? crypto.randomUUID() : null;

    if (mainAmt > 0.005) {
      await api.post('/api/payments', {
        tenant_id: tenantId, billing_month: billingMonth, payment_date: payDate,
        amount: Math.round(mainAmt * 100) / 100, method, notes, verified, proof_image: window._proofImage || null,
        split_group: splitGroup,
      });
    }
    await api.post('/api/payments', {
      tenant_id: tenantId, billing_month: adjMonth || billingMonth, payment_date: payDate,
      amount: Math.round(adjAmount * 100) / 100, method,
      notes: notes || `Period adjustment${adjMonth ? ` for ${fmtMonth(adjMonth)}` : ''}`,
      verified, proof_image: null,
      split_group: splitGroup,
    });
  } else {
    await api.post('/api/payments', {
      tenant_id: tenantId, billing_month: billingMonth, payment_date: payDate,
      amount, method, notes, verified, proof_image: window._proofImage || null,
    });
  }

  window._proofImage   = null;
  window._payOverpayOption = null;
  window._payOverpayDiff   = 0;
  closeModal();
  renderPayments();
}

function updatePayBankInfo() {
  const ctx = window._payFormCtx;
  if (!ctx) return;
  const tenantId = parseInt($$('pay-tenant')?.value);
  if (!tenantId) return;
  const tenant = ctx.tenantMap[tenantId];
  if (!tenant) return;
  const prop = ctx.propMap[tenant.property_id];
  const bankEl = $$('pay-bank-info');
  if (bankEl && prop) {
    bankEl.innerHTML = `<strong>${prop.bank_name}</strong><br><span style="font-size:12px;color:var(--muted)">${prop.bank_account}</span>`;
  }
}

async function updatePaymentDiff() {
  const wrap   = $$('pay-diff-wrap');
  const infoEl = $$('pay-diff-info');
  if (!wrap || !infoEl) return;

  const tenantId     = parseInt($$('pay-tenant')?.value);
  const amount       = parseFloat($$('pay-amount')?.value);
  const billingMonth = $$('pay-month')?.value;

  if (!tenantId) { wrap.style.display = 'none'; return; }
  const ctx    = window._payFormCtx;
  const tenant = ctx?.tenantMap[tenantId];
  if (!tenant) { wrap.style.display = 'none'; return; }

  // Try to fetch invoice amount for selected billing month
  let invoiceAmt    = null;
  let prevBillingMo = null;
  let prevOutstanding = 0;
  if (billingMonth && tenant.room_id) {
    try {
      const inv = await api.get(`/api/billing/invoice?room_id=${tenant.room_id}&month=${billingMonth}`);
      if (inv.total_bill != null) invoiceAmt = inv.total_bill;
      prevBillingMo   = inv.prev_billing_month || null;
      prevOutstanding = inv.prev_outstanding   || 0;
    } catch { /* no invoice for this month */ }
  }

  // Apply $5 threshold to previous outstanding
  if (Math.abs(prevOutstanding) < 5) prevOutstanding = 0;

  // expectedAmt = this month's invoice + any genuine prev-month outstanding (FY-scoped)
  const expectedAmt = invoiceAmt != null
    ? invoiceAmt + prevOutstanding
    : (tenant.outstanding_balance || 0);

  let html = '';

  // Show invoice + prior-period balance (NOT current invoice double-counted as outstanding)
  if (invoiceAmt != null) {
    html += `<span class="text-muted" style="font-size:12px">Invoice: <strong>${hk(invoiceAmt)}</strong></span>`;
    if (Math.abs(prevOutstanding) >= 5) {
      html += prevOutstanding > 0
        ? `&ensp;<span class="text-danger">+ ${t('outstanding_lbl')}: <strong>+${hk(prevOutstanding)}</strong></span>`
        : `&ensp;<span class="text-success">+ ${t('balance_credit')}: <strong>−${hk(-prevOutstanding)}</strong></span>`;
    }
    html += '<br>';
  } else if (Math.abs(tenant.outstanding_balance || 0) >= 5) {
    const outstanding = tenant.outstanding_balance || 0;
    html += outstanding > 0
      ? `<span class="text-danger">⚠ ${t('outstanding_lbl')}: <strong>+${hk(outstanding)}</strong></span><br>`
      : `<span class="text-success">▲ ${t('balance_credit')}: <strong>−${hk(-outstanding)}</strong></span><br>`;
  }

  // Detect over/underpayment only when amount is entered
  if (!isNaN(amount) && amount > 0 && expectedAmt > 0) {
    const diff = amount - expectedAmt;
    window._payOverpayDiff = diff;

    if (Math.abs(diff) < 0.01) {
      html += `<span class="pay-diff-exact">✓ Exact amount — ${hk(amount)}</span>`;
      window._payOverpayOption = 'exact';
    } else if (diff > 0.01) {
      window._payOverpayOption = window._payOverpayOption === 'adjust' ? 'adjust' : 'carry';
      // Preserve whatever month the user already picked before this re-render
      const preservedAdjMonth = $$('overpay-adj-month')?.value || prevBillingMo || '';
      html += `
        <div class="overpay-wrap">
          <div class="overpay-header">⚠ <strong>${t('overpay_detected')}: ${hk(diff)}</strong> — ${t('overpay_q')}</div>
          <div class="overpay-options">
            <label class="radio-option">
              <input type="radio" name="overpay_opt" value="carry" ${window._payOverpayOption !== 'adjust' ? 'checked' : ''} onchange="updateOverpayFields()" />
              <span>${t('overpay_option1')}</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="overpay_opt" value="adjust" ${window._payOverpayOption === 'adjust' ? 'checked' : ''} onchange="updateOverpayFields()" />
              <span>${t('overpay_option2')}</span>
            </label>
          </div>
          <div id="overpay-adjust-fields" style="${window._payOverpayOption === 'adjust' ? '' : 'display:none'}">
            <div class="form-grid" style="margin-top:10px;gap:10px">
              <div class="form-group">
                <label>${t('overpay_adj_amount')}</label>
                <input type="number" id="overpay-adj-amount" step="0.01" value="${diff.toFixed(2)}" min="0.01" max="${amount}" />
              </div>
              <div class="form-group">
                <label>${t('overpay_adj_month')}</label>
                <select id="overpay-adj-month">
                  <option value="">— Select month —</option>
                  ${generateMonthOptions(preservedAdjMonth)}
                </select>
              </div>
            </div>
          </div>
        </div>`;
    } else {
      window._payOverpayOption = null;
      html += `<span class="pay-diff-short">⚠ ${t('underpay_info')}: <strong>${hk(-diff)}</strong> short</span>`;
    }
  } else {
    window._payOverpayOption = null;
    window._payOverpayDiff   = 0;
  }

  infoEl.innerHTML = html;
  wrap.style.display = html ? '' : 'none';
}

function updateOverpayFields() {
  const opt = document.querySelector('input[name="overpay_opt"]:checked')?.value;
  window._payOverpayOption = opt;
  const adjFields = $$('overpay-adjust-fields');
  if (adjFields) adjFields.style.display = (opt === 'adjust') ? '' : 'none';
}

function handleProofUpload(input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const fnEl = $$('pay-proof-filename');
  if (fnEl) fnEl.textContent = file.name;

  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxDim = 800;
      let w = img.width, h = img.height;
      if (w > maxDim || h > maxDim) {
        if (w >= h) { h = Math.round(h * maxDim / w); w = maxDim; }
        else { w = Math.round(w * maxDim / h); h = maxDim; }
      }
      canvas.width = w; canvas.height = h;
      canvas.getContext('2d').drawImage(img, 0, 0, w, h);
      window._proofImage = canvas.toDataURL('image/jpeg', 0.72);
      const previewEl = $$('pay-proof-preview');
      if (previewEl) {
        previewEl.innerHTML = `<img src="${window._proofImage}" style="max-width:200px;max-height:150px;border-radius:6px;border:1.5px solid var(--border);" />`;
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

async function markPaymentVerified(id) {
  if (!confirm(t('mark_verified'))) return;
  await api.put(`/api/payments/${id}`, { verified: 1 });
  renderPayments();
}

async function deletePayment(id, hasSplit = false) {
  const msg = hasSplit ? t('del_confirm_split') : t('del_confirm');
  if (!confirm(msg)) return;
  await api.delete(`/api/payments/${id}`);
  renderPayments();
}

// ── Receipt ──────────────────────────────────────────────────────────────────

async function printReceipt(paymentId) {
  let r;
  try { r = await api.get(`/api/receipt/${paymentId}`); }
  catch (e) { alert(e.message); return; }

  const hasElec  = r.elec_rate > 0;
  const hasMeterWater = r.water_type === 'meter';
  const hasFixedWater = r.water_type === 'fixed';
  const hasCommission = (r.commission_applied || 0) > 0;

  const meterTableHtml = (hasElec || hasMeterWater) ? `
    <table class="r-meter-table">
      <thead><tr><th>Meter</th><th>Previous Reading</th><th>Current Reading</th><th>Units Used</th></tr></thead>
      <tbody>
        ${hasElec ? `<tr><td>Electricity (kWh)</td><td>${r.elec_prev ?? '–'}</td><td>${r.elec_curr ?? '–'}</td><td>${r.elec_units ?? '–'}</td></tr>` : ''}
        ${hasMeterWater ? `<tr><td>Water (m³)</td><td>${r.water_prev ?? '–'}</td><td>${r.water_curr ?? '–'}</td><td>${r.water_units ?? '–'}</td></tr>` : ''}
      </tbody>
    </table>` : '';

  // Balance computations:
  // outstanding_balance is current (post-payment). Reverse to get pre-payment state.
  const currentBal  = r.outstanding_balance ?? 0;
  const prevBalance = currentBal + r.amount - (r.total_bill || 0);  // balance before this payment

  const lines = [];
  if (r.rent_amount != null) lines.push(['Rent', hk(r.rent_amount)]);
  if (hasElec && r.elec_units != null) lines.push([`Electricity (${r.elec_units} units × $${r.elec_rate})`, hk(r.elec_amount)]);
  if (hasMeterWater && r.water_units != null) lines.push([`Water (${r.water_units} units × $${r.water_rate})`, hk(r.water_amount)]);
  if (hasFixedWater && r.water_amount != null) lines.push(['Water (fixed)', hk(r.water_amount)]);
  if (hasCommission) lines.push([`Less: Commission`, `− ${hk(r.commission_applied)}`]);

  const chargesHtml = lines.map(([label, val]) => `
    <tr>
      <td>${label}</td>
      <td class="r-amount">${val}</td>
    </tr>`).join('');

  const win = window.open('', '_blank', 'width=700,height=900');
  win.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Receipt ${r.receipt_no}</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; font-size: 13px; color: #111; padding: 40px; max-width: 600px; margin: auto; }
  h1 { font-size: 22px; font-weight: 700; text-align: center; margin-bottom: 4px; }
  .subtitle { text-align: center; font-size: 13px; color: #555; margin-bottom: 24px; }
  .r-header { display: flex; justify-content: space-between; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #333; }
  .r-header-left h2 { font-size: 15px; font-weight: 700; }
  .r-header-left p { font-size: 12px; color: #444; margin-top: 3px; }
  .r-meta { font-size: 12px; text-align: right; color: #444; line-height: 1.8; }
  .r-meta strong { color: #111; }
  table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
  th, td { padding: 7px 10px; text-align: left; }
  .r-charges th { border-bottom: 1.5px solid #ddd; font-size: 11px; text-transform: uppercase; color: #777; }
  .r-charges td { border-bottom: 1px solid #eee; }
  .r-amount { text-align: right; font-weight: 600; }
  .r-total-row td { border-top: 2px solid #333; font-weight: 700; font-size: 14px; padding-top: 10px; }
  .r-total-row .r-amount { color: #16a34a; }
  .r-bank { margin: 20px 0; padding: 12px 14px; background: #f5f5f5; border-radius: 6px; font-size: 12px; line-height: 1.8; }
  .r-bank strong { font-size: 13px; }
  .r-meter-table th, .r-meter-table td { border: 1px solid #ddd; text-align: center; font-size: 12px; }
  .r-meter-table th { background: #f0f0f0; font-size: 11px; text-transform: uppercase; }
  .r-meter-table td:first-child { text-align: left; }
  .r-footer { margin-top: 28px; border-top: 1px dashed #aaa; padding-top: 12px; font-size: 11px; color: #888; text-align: center; }
  .r-sign-area { margin-top: 30px; display: flex; justify-content: space-between; font-size: 12px; }
  .r-sign-line { border-top: 1px solid #999; width: 180px; padding-top: 4px; text-align: center; color: #555; }
  @media print {
    body { padding: 20px; }
    button { display: none; }
  }
</style>
</head>
<body>
<h1>RENT RECEIPT</h1>
<p class="subtitle">Payable to: <strong>WONG YUK CHING</strong></p>

<div class="r-header">
  <div class="r-header-left">
    <h2>${r.property_address}</h2>
    <p>Room ${r.room_label} &nbsp;|&nbsp; ${r.tenant_name}</p>
    <p>Month: <strong>${fmtMonth(r.billing_month || '')}</strong></p>
  </div>
  <div class="r-meta">
    <div>Receipt No: <strong>${r.receipt_no}</strong></div>
    <div>Date Received: <strong>${fmtDate(r.payment_date)}</strong></div>
    <div>Method: <strong>${methodLabel(r.method)}</strong></div>
  </div>
</div>

<table class="r-charges">
  <thead><tr><th>Description</th><th class="r-amount">Amount</th></tr></thead>
  <tbody>
    ${Math.abs(prevBalance) > 0.01 ? `<tr style="color:${prevBalance > 0 ? '#dc2626' : '#16a34a'}">
      <td>Previous Balance${prevBalance > 0 ? ' (outstanding)' : ' (credit)'}</td>
      <td class="r-amount">${prevBalance > 0 ? '+' : ''}${hk(prevBalance)}</td>
    </tr>` : ''}
    ${chargesHtml}
    <tr class="r-total-row">
      <td>TOTAL RECEIVED</td>
      <td class="r-amount">${hk(r.amount)}</td>
    </tr>
    <tr style="font-size:12px;color:${currentBal > 0.01 ? '#dc2626' : (currentBal < -0.01 ? '#2563eb' : '#16a34a')}">
      <td style="padding-top:8px">Balance After Payment</td>
      <td class="r-amount" style="padding-top:8px;font-weight:700">
        ${currentBal > 0.01 ? '+' + hk(currentBal) + ' outstanding' : currentBal < -0.01 ? hk(-currentBal) + ' credit' : '✓ Settled'}
      </td>
    </tr>
  </tbody>
</table>

<div class="r-bank">
  <strong>Bank Details — Payable to: WONG YUK CHING</strong><br>
  Bank: ${r.bank_name} &nbsp;|&nbsp; Account No: ${r.bank_account}<br>
  Property: ${r.property_code}
</div>

${meterTableHtml ? `<p style="font-weight:700;font-size:12px;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">Meter Readings</p>${meterTableHtml}` : ''}

<div class="r-sign-area">
  <div class="r-sign-line">Received by</div>
  <div class="r-sign-line">Tenant Signature</div>
</div>

<div class="r-footer">
  This is a computer-generated receipt. &nbsp; ${r.property_code} — ${r.property_address}
</div>

<div style="text-align:center;margin-top:20px">
  <button onclick="window.print()" style="padding:10px 24px;background:#2563eb;color:#fff;border:none;border-radius:6px;font-size:14px;cursor:pointer">🖨 Print Receipt</button>
</div>
</body>
</html>`);
  win.document.close();
}

// ── Expenses ─────────────────────────────────────────────────────────────────

async function renderExpenses() {
  const fy = S.data.globalFY !== undefined ? String(S.data.globalFY) : String(currentFY());
  const propFilter = S.data.expPropId || '';

  const params = new URLSearchParams({ fy });
  if (propFilter) params.set('property_id', propFilter);

  const [expenses, properties] = await Promise.all([
    api.get(`/api/expenses?${params}`),
    api.get('/api/properties'),
  ]);

  // Per-property totals
  const propTotals = {};
  properties.forEach(p => { propTotals[p.id] = { code: p.code, cats: {}, total: 0 }; });
  expenses.forEach(e => {
    if (propTotals[e.property_id]) {
      propTotals[e.property_id].cats[e.category] = (propTotals[e.property_id].cats[e.category] || 0) + e.amount;
      propTotals[e.property_id].total += e.amount;
    }
  });

  const grandTotal = expenses.reduce((s, e) => s + e.amount, 0);

  const propOpts = properties.map(p =>
    `<option value="${p.id}" ${propFilter == p.id ? 'selected' : ''}>${p.code} — ${p.address}</option>`
  ).join('');

  // Category summary
  const catTotals = {};
  expenses.forEach(e => { catTotals[e.category] = (catTotals[e.category] || 0) + e.amount; });

  const catSummaryHtml = Object.entries(catTotals).map(([cat, amt]) => `
    <div class="room-row">
      <span class="room-label" style="min-width:180px">${catLabel(cat)}</span>
      <span class="td-money">${hk(amt)}</span>
    </div>`).join('');

  // Per-property breakdown
  const propBreakdownHtml = Object.values(propTotals)
    .filter(p => p.total > 0)
    .map(p => `
      <div style="margin-bottom:8px">
        <div style="font-weight:700;font-size:13px;margin-bottom:4px">${p.code}</div>
        ${Object.entries(p.cats).map(([cat, amt]) => `
          <div class="room-row" style="padding:4px 0">
            <span style="color:var(--muted);min-width:160px;font-size:12px">${catLabel(cat)}</span>
            <span class="td-money" style="font-size:12px">${hk(amt)}</span>
          </div>`).join('')}
        <div class="room-row" style="border-top:1px solid var(--border);font-weight:600;font-size:12px">
          <span style="min-width:160px">Total</span>
          <span class="td-money">${hk(p.total)}</span>
        </div>
      </div>`).join('');

  const propById = {};
  properties.forEach(p => { propById[p.id] = p; });

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a.property_id !== b.property_id) return a.property_id - b.property_id;
    return new Date(b.expense_date) - new Date(a.expense_date);
  });

  let lastExpPropId = null;
  const expRowsArr = [];
  if (sortedExpenses.length === 0) {
    expRowsArr.push(`<tr><td colspan="6" class="empty-state">${t('no_data')}</td></tr>`);
  } else {
    sortedExpenses.forEach(e => {
      if (e.property_id !== lastExpPropId) {
        const prop = propById[e.property_id];
        const label = prop ? `${prop.code} — ${prop.address}` : (e.property_code || '–');
        if (lastExpPropId !== null) {
          expRowsArr.push(`<tr class="prop-group-spacer"><td colspan="6"></td></tr>`);
        }
        expRowsArr.push(`<tr class="prop-table-header"><td colspan="6">${label}</td></tr>`);
        lastExpPropId = e.property_id;
      }
      expRowsArr.push(`
        <tr>
          <td><strong>${e.property_code || '–'}</strong></td>
          <td>${fmtDate(e.expense_date)}</td>
          <td><span class="badge badge-blue">${catLabel(e.category)}</span></td>
          <td class="td-money">${hk(e.amount)}</td>
          <td>${e.description || ''}</td>
          <td><button class="btn btn-danger btn-sm" onclick="deleteExpense(${e.id})">✕</button></td>
        </tr>`);
    });
  }
  const rows = expRowsArr.join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('expenses_title')}</h2>
      <button class="btn btn-primary" onclick="showAddExpense()">${t('add_expense')}</button>
    </div>
    <div class="section mb-16">
      <div class="section-header">
        <h3>${t('filter_year')}: ${fyLabel(fy)}</h3>
        <div style="display:flex;gap:10px;align-items:center">
          <select onchange="S.data.expPropId=this.value; renderExpenses()">
            <option value="">All Properties</option>
            ${propOpts}
          </select>
          <button class="btn btn-ghost btn-sm" onclick="S.data.expPropId=''; renderExpenses()">✕</button>
        </div>
      </div>
      <div class="section-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
          <div>
            <div style="font-weight:700;font-size:12px;text-transform:uppercase;color:var(--muted);margin-bottom:8px">${t('category_col')}</div>
            ${catSummaryHtml}
            <div class="room-row" style="border-top:2px solid var(--border);margin-top:4px;font-weight:700">
              <span style="min-width:180px">${t('total_expenses')}</span>
              <span class="td-money">${hk(grandTotal)}</span>
            </div>
          </div>
          <div>
            <div style="font-weight:700;font-size:12px;text-transform:uppercase;color:var(--muted);margin-bottom:8px">${t('by_property')}</div>
            ${propBreakdownHtml || `<div class="text-muted" style="font-size:13px">${t('no_data')}</div>`}
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>${t('property_col')}</th><th>${t('date_col')}</th>
              <th>${t('category_col')}</th><th class="td-right">${t('amount_col')}</th>
              <th>${t('description_col')}</th><th></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
}

function showAddExpense() {
  api.get('/api/properties').then(properties => {
    const propOpts = properties.map(p =>
      `<option value="${p.id}">${p.code} — ${p.address}</option>`
    ).join('');

    openModal(t('add_expense'), `
      <form id="exp-form" onsubmit="submitExpense(event)">
        <div class="form-grid">
          <div class="form-group">
            <label>${t('property_lbl')} *</label>
            <select id="exp-prop" required>
              <option value="">— Select Property —</option>
              ${propOpts}
            </select>
          </div>
          <div class="form-group">
            <label>${t('expense_date')}</label>
            <input type="date" id="exp-date" value="${today()}" required />
          </div>
          <div class="form-group">
            <label>${t('category_lbl')}</label>
            <select id="exp-cat" required>
              <option value="govt_rent">${t('cat_govt_rent')}</option>
              <option value="govt_rates">${t('cat_govt_rates')}</option>
              <option value="repairs">${t('cat_repairs')}</option>
              <option value="insurance">${t('cat_insurance')}</option>
              <option value="stamp_duty">${t('cat_stamp_duty')}</option>
              <option value="handling_fee">${t('cat_handling_fee')}</option>
              <option value="other">${t('cat_other')}</option>
            </select>
          </div>
          <div class="form-group">
            <label>${t('amount_lbl')}</label>
            <input type="number" id="exp-amount" step="0.01" min="0" required placeholder="0" />
          </div>
          <div class="form-group full">
            <label>${t('desc_lbl')}</label>
            <input type="text" id="exp-desc" placeholder="Optional" />
          </div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn btn-ghost" onclick="closeModal()">${t('cancel')}</button>
          <button type="submit" class="btn btn-primary">💾 ${t('save')}</button>
        </div>
      </form>`);
  });
}

async function submitExpense(e) {
  e.preventDefault();
  const propId = $$('exp-prop').value;
  if (!propId) { alert('Please select a property.'); return; }
  await api.post('/api/expenses', {
    property_id:  parseInt(propId),
    expense_date: $$('exp-date').value,
    category:     $$('exp-cat').value,
    amount:       parseFloat($$('exp-amount').value),
    description:  $$('exp-desc').value || null,
  });
  closeModal();
  renderExpenses();
}

async function deleteExpense(id) {
  if (!confirm(t('del_confirm'))) return;
  await api.delete(`/api/expenses/${id}`);
  renderExpenses();
}

// ── Annual Summary ───────────────────────────────────────────────────────────

async function renderSummary() {
  const fy = S.data.globalFY !== undefined ? String(S.data.globalFY) : String(currentFY());
  const data = await api.get(`/api/summary?fy=${fy}`);
  const { fyLabel: fyLbl, income, expenses, summary: s, propBreakdown } = data;

  const incomeRows = income.byProperty.map(p => `
    <tr>
      <td><strong>${p.code}</strong></td>
      <td class="td-money">${hk(p.total_income)}</td>
    </tr>`).join('');

  const nav = s.netIncome >= 0 ? 'text-success' : 'text-danger';

  // Per-property breakdown table
  const propBDHtml = propBreakdown.map(p => `
    <div class="prop-tax-card">
      <div class="prop-tax-header">${p.code} <span style="font-weight:400;font-size:12px;opacity:.8">${p.address}</span></div>
      <div class="tax-row"><span>${t('total_rental')}</span><strong>${hk(p.income)}</strong></div>
      ${p.expenses.govtRent  > 0 ? `<div class="tax-row"><span>${t('less_govt_rent')}</span><strong>− ${hk(p.expenses.govtRent)}</strong></div>` : ''}
      ${p.expenses.govtRates > 0 ? `<div class="tax-row"><span>${t('less_govt_rates')}</span><strong>− ${hk(p.expenses.govtRates)}</strong></div>` : ''}
      ${p.expenses.repairs   > 0 ? `<div class="tax-row"><span>${t('less_repairs')}</span><strong>− ${hk(p.expenses.repairs)}</strong></div>` : ''}
      ${p.expenses.insurance > 0 ? `<div class="tax-row"><span>${t('less_insurance')}</span><strong>− ${hk(p.expenses.insurance)}</strong></div>` : ''}
      ${p.expenses.stampDuty > 0 ? `<div class="tax-row"><span>${t('less_stamp_duty')}</span><strong>− ${hk(p.expenses.stampDuty)}</strong></div>` : ''}
      <div class="tax-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:6px">
        <span>${t('net_income')}</span><strong class="${p.netIncome >= 0 ? 'text-success' : 'text-danger'}">${hk(p.netIncome)}</strong>
      </div>
      <div class="tax-row total">
        <span>${t('est_tax')}</span><strong class="text-danger">${hk(p.tax)}</strong>
      </div>
    </div>`).join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('summary_title')}</h2>
      <span style="font-weight:700;color:var(--accent);font-size:14px">${fyLbl}</span>
    </div>

    <div class="stats-grid">
      <div class="stat-card green">
        <div class="stat-label">${t('total_income')}</div>
        <div class="stat-value" style="font-size:20px">${hk(s.totalIncome)}</div>
      </div>
      <div class="stat-card red">
        <div class="stat-label">${t('total_expenses')}</div>
        <div class="stat-value" style="font-size:20px">${hk(s.totalExpenses)}</div>
      </div>
      <div class="stat-card" style="border-color:${s.netIncome>=0?'var(--success)':'var(--danger)'}">
        <div class="stat-label">${t('net_income')}</div>
        <div class="stat-value ${nav}" style="font-size:20px">${hk(s.netIncome)}</div>
      </div>
      <div class="stat-card amber">
        <div class="stat-label">${t('per_owner')}</div>
        <div class="stat-value" style="font-size:20px">${hk(s.perOwner)}</div>
      </div>
    </div>

    <div class="summary-grid">
      <div class="section">
        <div class="section-header"><h3>${t('income_section')}</h3></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>${t('property_col')}</th><th class="td-right">${t('income_paid')}</th></tr></thead>
            <tbody>
              ${incomeRows}
              <tr style="font-weight:700;border-top:2px solid var(--border)">
                <td>${t('total_income')}</td>
                <td class="td-money">${hk(s.totalIncome)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="section">
        <div class="section-header"><h3>🧾 ${t('tax_section')}</h3></div>
        <div class="section-body">
          <div class="tax-box">
            <div class="tax-row">
              <span>${t('total_rental')}</span>
              <strong>${hk(s.totalIncome)}</strong>
            </div>
            ${s.govtRent  > 0 ? `<div class="tax-row"><span>${t('less_govt_rent')}</span><strong>− ${hk(s.govtRent)}</strong></div>` : ''}
            ${s.govtRates > 0 ? `<div class="tax-row"><span>${t('less_govt_rates')}</span><strong>− ${hk(s.govtRates)}</strong></div>` : ''}
            ${s.repairs   > 0 ? `<div class="tax-row"><span>${t('less_repairs')}</span><strong>− ${hk(s.repairs)}</strong></div>` : ''}
            ${s.insurance > 0 ? `<div class="tax-row"><span>${t('less_insurance')}</span><strong>− ${hk(s.insurance)}</strong></div>` : ''}
            ${s.stampDuty > 0 ? `<div class="tax-row"><span>${t('less_stamp_duty')}</span><strong>− ${hk(s.stampDuty)}</strong></div>` : ''}
            <div class="tax-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:8px">
              <span>${t('net_taxable')}</span>
              <strong>${hk(s.netIncome)}</strong>
            </div>
            <div class="tax-row" style="padding-top:8px;border-top:1px dashed var(--border);margin-top:6px;font-size:12px;color:var(--muted)">
              <span>${t('tax_formula')}</span>
            </div>
            <div class="tax-row total">
              <span>${t('est_tax')}</span>
              <strong class="text-danger">${hk(s.propertyTax)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section mt-16">
      <div class="section-header"><h3>🏠 ${t('prop_breakdown')}</h3></div>
      <div class="section-body">
        <div class="prop-tax-grid">${propBDHtml}</div>
      </div>
    </div>`;
}

// ── Modal ────────────────────────────────────────────────────────────────────

function openModal(title, bodyHtml) {
  $$('modal-title').textContent = title;
  $$('modal-body').innerHTML = bodyHtml;
  $$('modal-overlay').classList.remove('hidden');
}

function closeModal() {
  $$('modal-overlay').classList.add('hidden');
}

// ── Language ─────────────────────────────────────────────────────────────────

function setLang(lang) {
  S.lang = lang;
  localStorage.setItem('lang', lang);
  applyLang();
  if ($$('app') && !$$('app').classList.contains('hidden')) {
    renderView();
  }
}

function applyLang() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  const lp = $$('lbl-password'); if (lp) lp.textContent = t('lbl_password');
  const lb = $$('login-btn');   if (lb) lb.textContent = t('login_btn');
  const lt = $$('login-title'); if (lt) lt.textContent = t('login');
  const pi = $$('pwd-input');   if (pi) pi.placeholder = t('enter_password') || 'Password';
  ['en', 'tc'].forEach(l => {
    const b1 = $$(`lang-${l}-btn`);
    const b2 = $$(`sb-lang-${l}`);
    if (b1) b1.classList.toggle('active', l === S.lang);
    if (b2) b2.classList.toggle('active', l === S.lang);
  });
}

// ── Auth ─────────────────────────────────────────────────────────────────────

async function tryLogin(password) {
  const res = await fetch(BASE + '/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) throw new Error(t('login_error'));
  const data = await res.json();
  return data.token;
}

function logout() {
  S.token = '';
  localStorage.removeItem('token');
  showLoginScreen();
}

function showLoginScreen() {
  $$('login-screen').classList.remove('hidden');
  $$('app').classList.add('hidden');
  applyLang();
}

function showApp() {
  $$('login-screen').classList.add('hidden');
  $$('app').classList.remove('hidden');
  applyLang();
  const globalFY = S.data.globalFY !== undefined ? S.data.globalFY : currentFY();
  S.data.globalFY = globalFY;
  const sel = document.getElementById('global-fy-select');
  if (sel) sel.innerHTML = fySelectOptions(globalFY);
  navigate('dashboard');
}

// ── Expose globals ──────────────────────────────────────────────────────────

window.setLang            = setLang;
window.closeModal         = closeModal;
window.deleteBilling      = deleteBilling;
window.deletePayment      = deletePayment;
window.deleteExpense      = deleteExpense;
window.showAddPayment     = showAddPayment;
window.showAddExpense     = showAddExpense;
window.submitPayment      = submitPayment;
window.submitExpense      = submitExpense;
window.saveBillingUnit    = saveBillingUnit;
window.calcBilling        = calcBilling;
window.changeBillingMonth = changeBillingMonth;
window.printReceipt       = printReceipt;
window.printInvoice       = printInvoice;
window.updatePayBankInfo    = updatePayBankInfo;
window.updatePaymentDiff    = updatePaymentDiff;
window.handleProofUpload    = handleProofUpload;
window.markPaymentVerified  = markPaymentVerified;
window.updateOverpayFields  = updateOverpayFields;
window.navDashMonth         = navDashMonth;
window.changeGlobalFY       = changeGlobalFY;
window.S                  = S;

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = $$('hamburger-btn');
  const sidebarEl = document.querySelector('.sidebar');
  const sidebarOverlay = $$('sidebar-overlay');

  function openSidebar() {
    sidebarEl?.classList.add('open');
    sidebarOverlay?.classList.add('visible');
    if (hamburgerBtn) hamburgerBtn.textContent = '✕';
  }

  function closeSidebar() {
    sidebarEl?.classList.remove('open');
    sidebarOverlay?.classList.remove('visible');
    if (hamburgerBtn) hamburgerBtn.textContent = '☰';
  }

  hamburgerBtn?.addEventListener('click', () => {
    sidebarEl?.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  sidebarOverlay?.addEventListener('click', closeSidebar);

  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigate(el.dataset.view);
      closeSidebar();
    });
  });

  $$('logout-btn')?.addEventListener('click', logout);

  $$('login-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const pw = $$('pwd-input').value;
    const errEl = $$('login-error');
    errEl.classList.add('hidden');
    try {
      const token = await tryLogin(pw);
      S.token = token;
      localStorage.setItem('token', token);
      showApp();
    } catch (err) {
      errEl.textContent = err.message;
      errEl.classList.remove('hidden');
    }
  });

  $$('modal-overlay')?.addEventListener('click', e => {
    if (e.target === $$('modal-overlay')) closeModal();
  });

  applyLang();

  if (S.token) {
    api.get('/api/dashboard').then(() => showApp()).catch(() => showLoginScreen());
  } else {
    showLoginScreen();
  }
});
