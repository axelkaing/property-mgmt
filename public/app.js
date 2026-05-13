// ── i18n ────────────────────────────────────────────────────────────────────

const STRINGS = {
  en: {
    app_title: 'Property Mgmt',
    nav_dashboard: 'Dashboard',
    nav_billing:   'Monthly Billing',
    nav_payments:  'Payments',
    nav_expenses:  'Expenses',
    nav_summary:   'Annual Summary',
    nav_tenants:   'Tenants',
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
    all_tenants:      'All Properties',
    all_units:        'All Units',
    all_cats:         'All Categories',
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
    cat_electricity:  'Electricity',
    cat_water:        'Water',
    cat_garbage:      'Garbage',
    cat_stamp_duty:   'Stamp Duty',
    cat_other:        'Other',
    property_lbl:     'Property',
    desc_lbl:         'Description',
    filter_year:      'Fiscal Year',
    by_property:      'By Property/Unit',

    summary_title:    'Annual Summary',
    fy_lbl:           'HK Fiscal Year',
    load_summary:     'Load',
    income_section:   'Income by Property',
    expense_section:  'Expenses by Category',
    income_paid:      'Payments Received',
    total_income:     'Total Income',
    total_expenses:   'Total Expenses',
    net_income:        'Net Income',
    mgmt_net_income:   'Management Net Income',
    after_tax_income:  'After-tax Income',
    tax_section:       'HK Property Tax Estimate',
    total_rental:     'Total Rental Income',
    less_govt_rent:   'Less: Govt Rent (地租)',
    less_govt_rates:  'Less: Rating & Valuation (差餉)',
    less_repairs:     'Less: Repairs',
    less_insurance:   'Less: Insurance',
    less_electricity: 'Less: Electricity',
    less_water:       'Less: Water',
    less_stamp_duty:  'Less: Stamp Duties',
    net_taxable:      'Net Income (after deductions)',
    tax_formula:      'Tax @ (Rental − Govt Rent) × 0.8 × 15%',
    est_tax:          'Estimated Property Tax',
    prop_breakdown:   'Per-Property Tax Breakdown',
    gen_expenses:     'General Expenses',

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

    tenants_title:    'Tenants',
    phone_lbl:        'Phone',
    lease_lbl:        'Lease Period',
    tenant_rent_lbl:  'Monthly Rent',
    remark_lbl:       'Remark',
    edit_tenant:      'Edit',
    lease_start_lbl:  'Lease Start',
    lease_end_lbl:    'Lease End',
    upload_contract:  'Upload Contract',
    view_contract:    'View Contract',
    remove_contract:  'Remove Contract',
    uploading_lbl:    'Uploading…',
  },
  tc: {
    app_title: '物業管理',
    nav_dashboard: '總覽',
    nav_billing:   '每月帳單',
    nav_payments:  '收款記錄',
    nav_expenses:  '支出記錄',
    nav_summary:   '年度摘要',
    nav_tenants:   '租客資料',
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
    all_tenants:      '所有物業',
    all_units:        '所有單位',
    all_cats:         '所有類別',
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
    cat_electricity:  '電費',
    cat_water:        '水費',
    cat_garbage:      '垃圾費',
    cat_stamp_duty:   '印花稅',
    cat_other:        '其他',
    property_lbl:     '物業',
    desc_lbl:         '描述',
    filter_year:      '財政年度',
    by_property:      '按物業/單位',

    summary_title:    '年度摘要',
    fy_lbl:           '香港財政年度',
    load_summary:     '載入',
    income_section:   '各物業收入',
    expense_section:  '各類支出',
    income_paid:      '已收款項',
    total_income:     '收入總計',
    total_expenses:   '支出總計',
    net_income:        '淨收入',
    mgmt_net_income:   '管理淨收入',
    after_tax_income:  '稅後收入',
    tax_section:       '香港物業稅估算',
    total_rental:     '租金收入總額',
    less_govt_rent:   '減：地租',
    less_govt_rates:  '減：差餉',
    less_repairs:     '減：維修費',
    less_insurance:   '減：保險費',
    less_electricity: '減：電費',
    less_water:       '減：水費',
    less_stamp_duty:  '減：印花稅',
    net_taxable:      '扣除後淨收入',
    tax_formula:      '稅款 @ (租金 − 地租) × 0.8 × 15%',
    est_tax:          '估計物業稅',
    prop_breakdown:   '各物業稅務明細',
    gen_expenses:     '一般支出',

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

    tenants_title:    '租客資料',
    phone_lbl:        '電話',
    lease_lbl:        '租期',
    tenant_rent_lbl:  '每月租金',
    remark_lbl:       '備注',
    edit_tenant:      '編輯',
    lease_start_lbl:  '租約開始',
    lease_end_lbl:    '租約結束',
    upload_contract:  '上傳合約',
    view_contract:    '查看合約',
    remove_contract:  '刪除合約',
    uploading_lbl:    '上傳中…',
  },
};

// ── State ────────────────────────────────────────────────────────────────────

const S = {
  lang: localStorage.getItem('lang') || 'en',
  token: localStorage.getItem('token') || '',
  role: localStorage.getItem('role') || 'admin',
  view: 'dashboard',
  data: {},
};

function t(k) { return STRINGS[S.lang][k] || k; }
function isViewer() { return S.role === 'viewer'; }

// Due day per property: 1=Woosung, 2=Parkes, 3=Jordan, 4=Pilkem(5F/SH), 5=CarPark, 6=4F/SH
const PROP_DUE_DAYS = { 1: 1, 2: 20, 3: 1, 4: 20, 5: 1, 6: 20 };

// Format unit code: "2F/WS"-"A" → "2F/WS-A", "5F/SH"+"Flat" → "5F/SH", "CarP"+"P99" → "CarP P99"
function fmtUnit(propCode, roomLabel) {
  if (!roomLabel || roomLabel === 'Flat') return propCode;
  if (/^[A-Z]$/.test(roomLabel)) return `${propCode}-${roomLabel}`;
  return `${propCode} ${roomLabel}`;
}
const GRACE_DAYS = 7;

// ── API Client ────────────────────────────────────────────────────────────────

const BASE = '';

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
function fmtDate(d) { if (!d) return '–'; return new Date(d + 'T00:00:00').toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }); }
function fmtMonth(m) { if (!m) return '–'; const [y, mo] = m.split('-'); return new Date(+y, +mo - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }

function openMonthPicker(wrap) {
  const inp = wrap.querySelector('input[type=month]');
  if (!inp) return;
  try { inp.showPicker(); } catch(e) { inp.focus(); }
}

function mkMonthInput(currentMonth, minMo, onChangeFn) {
  return `<div class="month-input-wrap" onclick="openMonthPicker(this)">
    <span class="month-input-icon">📅</span>
    <span class="month-input-label">${fmtMonth(currentMonth)}</span>
    <input type="month" value="${currentMonth}" min="${minMo || '2026-01'}" max="${ym()}"
      onchange="${onChangeFn}(this.value)" />
  </div>`;
}

function changeDashMonth(m) { S.data.dashMonth = m; renderDashboard(); }
function changePayMonth(m) { S.data.payMonth = m; renderPayments(); }
function changeExpMonth(m) { S.data.expMonth = m; S.data.expUnit = ''; S.data.expCat = ''; renderExpenses(); }
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
    electricity: t('cat_electricity'), water: t('cat_water'),
    garbage: t('cat_garbage'), other: t('cat_other'),
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
      case 'tenants':   await renderTenants();   break;
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
  $$('view-container').innerHTML = `<div class="empty-state">${t('loading')}</div>`;
  const data = await api.get(`/api/dashboard?month=${dashMonth}`);
  const { properties, rooms, expiring, totalMonthlyRent, paymentStatusMap = {} } = data;

  const roomsByProp = {};
  rooms.forEach(r => { (roomsByProp[r.property_id] = roomsByProp[r.property_id] || []).push(r); });

  const totalRooms     = properties.reduce((s, p) => s + (p.total_rooms || 0), 0);
  const totalOcc       = properties.reduce((s, p) => s + (p.occupied || 0), 0);
  const totalVac       = properties.reduce((s, p) => s + (p.vacant || 0), 0);
  const totalCollected = rooms.reduce((s, r) => s + (r.total_paid_month || 0), 0);

  const alertsHtml = expiring.length === 0
    ? `<p class="text-muted" style="padding:12px 0">${t('no_alerts')}</p>`
    : expiring.map(e => {
        const d = e.days_left;
        const daysTxt = d < 0 ? `${-d}d ${t('overdue')}` : `${d} ${t('days_left')}`;
        return `
          <div class="alert-item">
            <span class="alert-icon">⚠️</span>
            <div class="alert-text">
              <strong>${e.name} — ${fmtUnit(e.property_code, e.room_label)}</strong>
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

      // Amount to display: total due (invoice + prev credit/outstanding) if billed, else base rent
      const totalDue = r.total_bill != null ? r.total_bill + (r.prev_outstanding || 0) : null;
      const displayAmt = totalDue != null ? totalDue : r.rent;

      // Per-month balance: total due minus payments this month (only when billing exists for selected month)
      let balBadgeHtml = '';
      if (r.status !== 'vacant' && r.tenant_id) {
        const monthBal = totalDue != null
          ? totalDue - (r.total_paid_month || 0)
          : null;
        if (monthBal != null && Math.abs(monthBal) >= 0.5) {
          if (monthBal > 0) {
            balBadgeHtml = `<span class="bal-badge bal-badge-owed" style="background:#dc2626;color:#fff" title="${t('outstanding_lbl')}">+${hk(monthBal)}</span>`;
          } else {
            balBadgeHtml = `<span class="bal-badge bal-badge-credit" title="${t('balance_credit')}">${hk(-monthBal)}</span>`;
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
    </div>
    <div class="section mb-16">
      <div class="section-header">
        <h3>${t('filter_month')}</h3>
        ${mkMonthInput(dashMonth, '2026-01', 'changeDashMonth')}
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">${t('total_properties')}</div>
        <div class="stat-value">${properties.length} <span style="font-size:15px;font-weight:500;color:var(--muted)">(${totalRooms} units)</span></div>
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
      <div class="stat-card green">
        <div class="stat-label">${S.lang === 'tc' ? '本月已收' : 'Collected'}</div>
        <div class="stat-value" style="font-size:20px">${hk(totalCollected)}</div>
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


function escHtml(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function fmtDateDMY(d) {
  if (!d) return '—';
  const [y, m, day] = d.split('-');
  return `${day}/${m}/${y}`;
}

// ── Tenants Directory ─────────────────────────────────────────────────────────

async function renderTenants() {
  const units = await api.get('/api/tenants/directory');

  window._tenantDirData = {};
  units.forEach(u => { window._tenantDirData[u.room_id] = u; });

  const cards = units.map(u => {
    const unitLabel = fmtUnit(u.property_code, u.room_label);
    const isVacant = !u.tenant_id;
    const leasePeriod = u.contract_start || u.contract_end
      ? `${fmtDateDMY(u.contract_start)} — ${fmtDateDMY(u.contract_end)}`
      : '—';
    return `
      <div class="tenant-card">
        <div class="tenant-card-header">
          <span class="tenant-unit">${unitLabel}</span>
          ${isVacant ? `<span class="badge badge-red">${t('vacant')}</span>` : ''}
        </div>
        <div class="tenant-card-body">
          <div class="tenant-field">
            <span class="tenant-field-label">${t('tenant_col')}</span>
            <span class="tenant-field-value">${escHtml(u.name || '—')}</span>
          </div>
          <div class="tenant-field">
            <span class="tenant-field-label">${t('phone_lbl')}</span>
            <span class="tenant-field-value">${escHtml(u.phone || '—')}</span>
          </div>
          <div class="tenant-field">
            <span class="tenant-field-label">${t('lease_lbl')}</span>
            <span class="tenant-field-value">${leasePeriod}</span>
          </div>
          <div class="tenant-field">
            <span class="tenant-field-label">${t('tenant_rent_lbl')}</span>
            <span class="tenant-field-value">${u.rent ? hk(u.rent) : '—'}</span>
          </div>
          <div class="tenant-field">
            <span class="tenant-field-label">${t('deposit_lbl')}</span>
            <span class="tenant-field-value">${u.deposit ? hk(u.deposit) : '—'}</span>
          </div>
          <div class="tenant-field">
            <span class="tenant-field-label">${t('remark_lbl')}</span>
            <span class="tenant-field-value">${escHtml(u.remark || '—')}</span>
          </div>
        </div>
        ${!isVacant ? `
        <div class="tenant-card-actions">
          ${u.contract_url ? `<span class="contract-btn-group"><button class="btn btn-ghost btn-sm" onclick="viewTenantContract(${u.tenant_id})">📄 ${t('view_contract')}</button>${!isViewer() ? `<button class="btn btn-danger btn-sm contract-remove-btn" onclick="deleteTenantContract(${u.tenant_id})" title="${t('remove_contract')}">✕</button>` : ''}</span>` : ''}
          ${!isViewer() ? `
            <label class="btn btn-ghost btn-sm" style="cursor:pointer;margin:0">
              📎 ${t('upload_contract')}
              <input type="file" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="uploadTenantContract(${u.tenant_id}, this)" />
            </label>
            <button class="btn btn-ghost btn-sm" onclick="openTenantEdit(${u.room_id})">✏ ${t('edit_tenant')}</button>
          ` : ''}
        </div>` : ''}
      </div>`;
  }).join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('tenants_title')}</h2>
    </div>
    <div class="tenant-grid">${cards || `<div class="empty-state">${t('no_data')}</div>`}</div>`;
}

async function uploadTenantContract(tenantId, input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
  if (!allowed.includes(file.type)) { alert('Only PDF, JPG, PNG files are allowed.'); return; }

  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;top:20px;right:24px;background:#2563eb;color:#fff;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:600;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)';
  toast.textContent = t('uploading_lbl');
  document.body.appendChild(toast);

  try {
    // Send as multipart/form-data — no base64 encoding, browser sets the boundary automatically
    const formData = new FormData();
    formData.append('file', file, file.name);

    const res = await fetch(`/api/contracts/${tenantId}`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${S.token}` },
      body: formData,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);

    toast.textContent = '✓ Contract uploaded';
    toast.style.background = '#16a34a';
    setTimeout(() => toast.remove(), 2500);
    await renderTenants();
  } catch (err) {
    toast.remove();
    alert('Upload failed: ' + err.message);
  }
}

async function viewTenantContract(tenantId) {
  try {
    const res = await fetch(`/api/contracts/${tenantId}/view`, {
      headers: { Authorization: `Bearer ${S.token}` },
    });
    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      throw new Error(e.error || `HTTP ${res.status}`);
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  } catch (err) {
    alert('Could not open contract: ' + err.message);
  }
}

async function deleteTenantContract(tenantId) {
  if (!confirm('Remove this contract? This cannot be undone.')) return;
  try {
    await api.delete(`/api/contracts/${tenantId}`);
    await renderTenants();
  } catch (err) {
    alert('Could not remove contract: ' + err.message);
  }
}

function openTenantEdit(roomId) {
  const u = window._tenantDirData[roomId];
  if (!u) return;
  window._editTenantRoom = roomId;
  openModal(`✏ ${fmtUnit(u.property_code, u.room_label)}`, `
    <form id="tenant-edit-form" onsubmit="saveTenantEdit(event)">
      <div class="form-grid">
        <div class="form-group full">
          <label>${t('tenant_col')}</label>
          <input type="text" id="te-name" value="${escHtml(u.name || '')}" />
        </div>
        <div class="form-group full">
          <label>${t('phone_lbl')}</label>
          <input type="text" id="te-phone" value="${escHtml(u.phone || '')}" placeholder="e.g. 9123 4567" />
        </div>
        <div class="form-group">
          <label>${t('lease_start_lbl')}</label>
          <input type="date" id="te-start" value="${u.contract_start || ''}" />
        </div>
        <div class="form-group">
          <label>${t('lease_end_lbl')}</label>
          <input type="date" id="te-end" value="${u.contract_end || ''}" />
        </div>
        <div class="form-group">
          <label>${t('tenant_rent_lbl')}</label>
          <input type="number" id="te-rent" value="${u.rent || ''}" step="1" min="0" />
        </div>
        <div class="form-group">
          <label>${t('deposit_lbl')}</label>
          <input type="number" id="te-deposit" value="${u.deposit || ''}" step="1" min="0" />
        </div>
        <div class="form-group full">
          <label>${t('remark_lbl')}</label>
          <textarea id="te-remark" rows="3">${escHtml(u.remark || '')}</textarea>
        </div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">${t('cancel')}</button>
        <button type="submit" class="btn btn-primary">💾 ${t('save')}</button>
      </div>
    </form>`);
}

async function saveTenantEdit(e) {
  e.preventDefault();
  const data = window._tenantDirData[window._editTenantRoom];
  if (!data || !data.tenant_id) { closeModal(); return; }

  await api.put(`/api/tenants/${data.tenant_id}`, {
    name:           $$('te-name').value,
    phone:          $$('te-phone').value || null,
    contract_start: $$('te-start').value || null,
    contract_end:   $$('te-end').value || null,
    rent:           parseFloat($$('te-rent').value) || 0,
    deposit:        parseFloat($$('te-deposit').value) || 0,
    remark:         $$('te-remark').value || null,
    elec_rate:      data.elec_rate || 0,
    water_type:     data.water_type || 'none',
    water_rate:     data.water_rate || 0,
    commission:     data.commission || 0,
  });

  closeModal();
  await renderTenants();
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

  // Fetch FY-scoped previous balances for unbilled rooms — prevents future-month payments
  // from appearing as credits in historical months (chronological carry-forward enforcement).
  const prevBalMap = {};
  await Promise.all(tenants.map(async t_ => {
    if (existingMap[t_.room_id]) return; // billed: use ex.prev_balance from getBilling
    try {
      const inv = await api.get(`/api/billing/invoice?room_id=${t_.room_id}&month=${month}`);
      prevBalMap[t_.room_id] = { outstanding: inv.prev_outstanding || 0, prevMonth: inv.prev_billing_month || null };
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

    // For billed months: use FY-scoped prev_balance from getBilling.
    // For unbilled months: use FY-scoped prev_outstanding from invoice API — NOT outstanding_balance,
    // which is an all-time figure that includes future-month payments and would bleed credits backward.
    const rawPrevBal = ex.id
      ? (ex.prev_balance || 0)
      : (prevBalMap[t_.room_id]?.outstanding || 0);
    // Apply $0.5 minimum threshold — tiny rounding differences are treated as settled
    const prevBal   = Math.abs(rawPrevBal) < 0.5 ? 0 : rawPrevBal;
    const prevMonth = ex.id
      ? (ex.prev_billing_month || null)
      : (prevBalMap[t_.room_id]?.prevMonth || t_.last_billing_month || null);
    // Compute total_bill from stored components as fallback if stored value is 0
    const computedBill = (ex.rent_amount || 0) + (ex.elec_amount || 0) + (ex.water_amount || 0) - (ex.commission_applied || 0);
    const displayBill  = ex.id ? ((ex.total_bill > 0 ? ex.total_bill : computedBill)) : 0;
    const totalDue     = ex.id ? (displayBill + prevBal) : prevBal;

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
        ${!isViewer() ? `<button class="btn btn-danger btn-sm" onclick="deleteBilling(${ex.id}, '${month}')">✕</button>` : ''}
      </div>
      ${balanceHtml}` : prevBalHtml;

    return groupHeader + `
      <div class="billing-unit-card" id="bc-${t_.room_id}">
        <div class="billing-unit-header">
          <span class="billing-badge">${fmtUnit(t_.property_code, t_.room_label)}</span>
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
          ${!isViewer() ? `<button class="btn btn-primary btn-sm" onclick="saveBillingUnit(${t_.room_id}, ${t_.elec_rate}, '${t_.water_type}', ${t_.water_rate}, ${t_.commission || 0})">
            💾 ${t('save')}
          </button>` : ''}
          <button class="btn btn-ghost btn-sm" onclick="printInvoice(${t_.room_id})">
            🖨 ${t('print_invoice')}
          </button>
          <span id="bc-msg-${t_.room_id}" style="font-size:12px;color:var(--success)"></span>
        </div>
      </div>`;
  }).join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('billing_title')}</h2>
    </div>
    <div class="section">
      <div class="section-header">
        <h3>${t('billing_month')}</h3>
        ${mkMonthInput(month, '2026-01', 'changeBillingMonth')}
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
  if (S.data.payMonth === undefined) S.data.payMonth = ym();
  const month = S.data.payMonth;
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
    `<option value="${t_.id}" ${tenantFilter == t_.id ? 'selected' : ''}>${fmtUnit(t_.property_code, t_.room_label)}</option>`
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
        : isViewer()
          ? `<span class="verify-badge verify-pending" title="${t('pending_verify')}">✗</span>`
          : `<button class="verify-badge verify-btn" title="${t('mark_verified')}" onclick="markPaymentVerified(${p.id})">✓</button>`;
      const splitBadge = p.split_group
        ? `<span style="font-size:10px;color:#6b7280;margin-left:4px" title="Linked split record">⇄</span>`
        : '';
      payRowsArr.push(`
        <tr>
          <td class="col-mob-hide">${p.property_code}</td>
          <td class="col-mob-hide">${p.room_label}</td>
          <td class="col-pay-tenant">${p.tenant_name}</td>
          <td class="col-mob-hide">${p.billing_month ? fmtMonth(p.billing_month) : '–'}</td>
          <td class="col-mob-hide">${fmtDate(p.payment_date)}</td>
          <td class="td-money col-pay-amt">${hk(p.amount)}</td>
          <td class="col-mob-hide">${methodLabel(p.method)}</td>
          <td class="col-mob-hide" style="word-wrap:break-word;white-space:normal">${p.notes || ''}${splitBadge}</td>
          <td class="col-pay-ver" style="text-align:center">
            ${verifyBadge}
            ${p.has_proof ? `<div style="margin-top:3px"><button class="btn btn-ghost btn-sm" onclick="viewPaymentProof(${p.id})" title="View bank slip" style="font-size:11px;padding:2px 5px;min-width:0">📎</button></div>` : ''}
          </td>
          <td class="col-mob-hide" style="white-space:nowrap">
            ${!isViewer() ? `<button class="btn btn-danger btn-sm" onclick="deletePayment(${p.id}, ${!!p.split_group})">✕</button>` : ''}
          </td>
        </tr>`);
    });
  }
  const rows = payRowsArr.join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('payments_title')}</h2>
      ${!isViewer() ? `<button class="btn btn-primary" onclick="showAddPayment()">${t('add_payment')}</button>` : ''}
    </div>
    <div class="section mb-16">
      <div class="section-header filter-bar">
        <h3 class="filter-mob-label">${t('filter_month')}</h3>
        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
          ${mkMonthInput(month, '2026-01', 'changePayMonth')}
          <select onchange="S.data.payTenantId=this.value; renderPayments()">
            <option value="">${t('all_tenants')}</option>
            ${tenantOptions}
          </select>
          <button class="btn btn-ghost btn-sm" onclick="S.data.payMonth=ym();S.data.payTenantId='';renderPayments()">✕</button>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th class="col-mob-hide">${t('property_col')}</th><th class="col-mob-hide">${t('room_col')}</th><th class="col-pay-tenant">${t('tenant_col')}</th>
              <th class="col-mob-hide">${t('billing_month_lbl')}</th><th class="col-mob-hide">${t('date_col')}</th>
              <th class="td-right col-pay-amt">${t('amount_col')}</th><th class="col-mob-hide">${t('method_col')}</th>
              <th class="col-mob-hide">${t('notes_lbl')}</th><th class="col-pay-ver" style="text-align:center">${t('verified_col')}</th><th class="col-mob-hide"></th>
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

    const payMonth = S.data.payMonth || ym();
    const tenantOpts = tenants
      .filter(t_ => t_.active === 1 || (t_.contract_end && t_.contract_end >= payMonth))
      .map(t_ => `<option value="${t_.id}">${fmtUnit(t_.property_code, t_.room_label)} — ${t_.name}</option>`)
      .join('');

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
            <input type="month" lang="en" id="pay-month" value="${S.data.payMonth || ym()}" onchange="updatePaymentDiff()" />
          </div>
          <div class="form-group">
            <label>${t('payment_date')}</label>
            <input type="date" id="pay-date" value="${S.data.payMonth ? S.data.payMonth + '-01' : today()}" required />
          </div>
          <div class="form-group">
            <label>${t('amount_lbl')}</label>
            <input type="number" id="pay-amount" step="0.01" min="0" required placeholder="0" oninput="updatePaymentDiff()" />
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
          <div class="form-group full" id="pay-diff-wrap" style="display:none">
            <div id="pay-diff-info" class="pay-diff-info"></div>
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

  // Hide entirely for months before the tenant's last billing record
  if (billingMonth && billingMonth < (tenant.last_billing_month || '')) {
    wrap.style.display = 'none';
    return;
  }

  // Fetch invoice for the selected billing month
  let invoiceAmt      = null;
  let prevBillingMo   = null;
  let prevOutstanding = 0;
  if (billingMonth && tenant.room_id) {
    try {
      const inv = await api.get(`/api/billing/invoice?room_id=${tenant.room_id}&month=${billingMonth}`);
      if (inv.total_bill != null) invoiceAmt = inv.total_bill;
      prevBillingMo   = inv.prev_billing_month || null;
      prevOutstanding = inv.prev_outstanding   || 0;
    } catch { /* no invoice for this month */ }
  }

  // Apply $0.5 threshold to previous outstanding
  if (Math.abs(prevOutstanding) < 0.5) prevOutstanding = 0;

  // expectedAmt = this month's invoice + any genuine prev-month outstanding (FY-scoped)
  const expectedAmt = invoiceAmt != null
    ? invoiceAmt + prevOutstanding
    : (tenant.outstanding_balance || 0);

  let html = '';

  // Show invoice + prior-period carry-forward
  if (invoiceAmt != null) {
    html += `<span class="text-muted" style="font-size:12px">Invoice: <strong>${hk(invoiceAmt)}</strong></span>`;
    // Only show carry-forward when there is a real previous billing record (prev_billing_month non-null)
    if (prevBillingMo !== null && Math.abs(prevOutstanding) >= 0.5) {
      html += prevOutstanding > 0
        ? `&ensp;<span class="text-danger">+ ${t('outstanding_lbl')}: <strong>+${hk(prevOutstanding)}</strong></span>`
        : `&ensp;<span class="text-success">+ ${t('balance_credit')}: <strong>−${hk(-prevOutstanding)}</strong></span>`;
    }
    html += '<br>';
  } else if (Math.abs(tenant.outstanding_balance || 0) >= 0.5) {
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
      const preservedAdjMonth = $$('overpay-adj-month')?.value || prevBillingMo || '';
      html += `
        <div class="overpay-wrap">
          <div class="overpay-header">⚠ <strong>${t('overpay_detected')}: ${hk(diff)}</strong> — ${t('overpay_q')}</div>
          <div class="overpay-options">
            <label style="display:flex;flex-direction:row;align-items:flex-start;gap:10px;cursor:pointer;padding:8px 0;width:100%;box-sizing:border-box;text-transform:none;font-weight:normal;color:inherit;">
              <input type="radio" name="overpay_opt" value="carry" style="width:auto;flex-shrink:0;margin-top:3px;padding:0;border:none;background:transparent;" ${window._payOverpayOption !== 'adjust' ? 'checked' : ''} onchange="updateOverpayFields()" />
              <span style="flex:1;white-space:normal;word-wrap:break-word;">${t('overpay_option1')}</span>
            </label>
            <label style="display:flex;flex-direction:row;align-items:flex-start;gap:10px;cursor:pointer;padding:8px 0;width:100%;box-sizing:border-box;text-transform:none;font-weight:normal;color:inherit;">
              <input type="radio" name="overpay_opt" value="adjust" style="width:auto;flex-shrink:0;margin-top:3px;padding:0;border:none;background:transparent;" ${window._payOverpayOption === 'adjust' ? 'checked' : ''} onchange="updateOverpayFields()" />
              <span style="flex:1;white-space:normal;word-wrap:break-word;">${t('overpay_option2')}</span>
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

function expUnitLabel(e) {
  if (!e.property_id) return 'General';
  const raw = e.unit_label || e.property_code || '–';
  return raw === 'All Properties' ? 'General' : raw;
}

async function renderExpenses() {
  if (S.data.expMonth === undefined) S.data.expMonth = ym();
  const expMonth = S.data.expMonth;
  const expUnit  = S.data.expUnit  || '';
  const expCat   = S.data.expCat   || '';

  const params = new URLSearchParams({ month: expMonth });

  const [expenses, properties] = await Promise.all([
    api.get(`/api/expenses?${params}`),
    api.get('/api/properties'),
  ]);

  const propById = {};
  const propSortMap = {};
  properties.forEach(p => { propById[p.id] = p; propSortMap[p.id] = p.sort_order ?? 99; });

  const grandTotal = expenses.reduce((s, e) => s + e.amount, 0);

  // ── Unit filter dropdown: grouped by property ──
  const PROP_TREE = [
    { label: '2F/WS', children: ['2F/WS-A', '2F/WS-B', '2F/WS-C'] },
    { label: '3F/KC', children: ['3F/KC-A', '3F/KC-B', '3F/KC-C'] },
    { label: '4F/KS', children: ['4F/KS-A', '4F/KS-B', '4F/KS-C', '4F/KS-D', '4F/KS-E'] },
  ];
  const FLAT_UNITS = ['4F/SH', '5F/SH', 'CarP P99', 'General'];
  const unitOptions = [
    ...PROP_TREE.map(g => `<optgroup label="${g.label}">
      <option value="${g.label}" ${expUnit === g.label ? 'selected' : ''}>${g.label}</option>
      ${g.children.map(c => `<option value="${c}" ${expUnit === c ? 'selected' : ''}>${c}</option>`).join('')}
    </optgroup>`),
    ...FLAT_UNITS.map(u => `<option value="${u}" ${expUnit === u ? 'selected' : ''}>${u}</option>`),
  ].join('');

  // ── Property-level filter expands to include all child units ──
  const PROP_CHILDREN = {
    '2F/WS': new Set(['2F/WS', '2F/WS-A', '2F/WS-B', '2F/WS-C']),
    '3F/KC': new Set(['3F/KC', '3F/KC-A', '3F/KC-B', '3F/KC-C']),
    '4F/KS': new Set(['4F/KS', '4F/KS-A', '4F/KS-B', '4F/KS-C', '4F/KS-D', '4F/KS-E']),
  };

  let detailExpenses = expenses;
  if (expUnit) {
    const childSet = PROP_CHILDREN[expUnit];
    if (childSet) {
      detailExpenses = detailExpenses.filter(e => childSet.has(expUnitLabel(e)));
    } else {
      detailExpenses = detailExpenses.filter(e => expUnitLabel(e) === expUnit);
    }
  }
  if (expCat)  detailExpenses = detailExpenses.filter(e => e.category === expCat);

  const sortedExpenses = [...detailExpenses].sort((a, b) => {
    const oA = a.property_id != null ? (propSortMap[a.property_id] ?? 99) : 100;
    const oB = b.property_id != null ? (propSortMap[b.property_id] ?? 99) : 100;
    if (oA !== oB) return oA - oB;
    const kA = a.unit_label || a.property_code || '';
    const kB = b.unit_label || b.property_code || '';
    if (kA !== kB) return kA.localeCompare(kB);
    return new Date(b.expense_date) - new Date(a.expense_date);
  });

  let lastExpPropId = null;
  const expRowsArr = [];
  const expCardsArr = [];
  if (sortedExpenses.length === 0) {
    expRowsArr.push(`<tr><td colspan="6" class="empty-state">${t('no_data')}</td></tr>`);
    expCardsArr.push(`<div class="empty-state">${t('no_data')}</div>`);
  } else {
    sortedExpenses.forEach(e => {
      if (e.property_id !== lastExpPropId) {
        if (lastExpPropId !== null) {
          expRowsArr.push(`<tr class="prop-group-spacer"><td colspan="6"></td></tr>`);
        }
        const prop = propById[e.property_id];
        const groupLabel = prop ? `${prop.code} — ${prop.address}` : expUnitLabel(e);
        expRowsArr.push(`<tr class="prop-table-header"><td colspan="6">${groupLabel}</td></tr>`);
        expCardsArr.push(`<div class="exp-card-group-header">${groupLabel}</div>`);
        lastExpPropId = e.property_id;
      }
      const unitDisplay = expUnitLabel(e);
      const slipViewBtn = e.slip_url ? `<button class="btn btn-ghost btn-sm" onclick="viewExpenseSlip(${e.id})">👁 Slip</button>` : '';
      const slipUploadBtn = !isViewer() ? `<label class="btn btn-ghost btn-sm" style="cursor:pointer;margin:0">📎<input type="file" accept=".pdf,.jpg,.jpeg,.png" style="display:none" onchange="uploadExpenseSlip(${e.id}, this)" /></label>` : '';
      const deleteBtn = !isViewer() ? `<button class="btn btn-danger btn-sm" onclick="deleteExpense(${e.id})">✕</button>` : '';
      expRowsArr.push(`
        <tr>
          <td class="col-mob-hide"><strong>${unitDisplay}</strong></td>
          <td class="col-exp-date">${fmtDate(e.expense_date)}</td>
          <td class="col-exp-cat"><span class="badge badge-blue">${catLabel(e.category)}</span></td>
          <td class="td-money col-exp-amt">${hk(e.amount)}</td>
          <td class="col-mob-hide">${e.description || ''}</td>
          <td class="col-mob-hide" style="white-space:nowrap">${slipUploadBtn}${slipViewBtn}${deleteBtn}</td>
        </tr>`);
      expCardsArr.push(`
        <div class="exp-card">
          <div class="exp-card-row"><span class="exp-card-label">${t('date_col')}</span><span>${fmtDate(e.expense_date)}</span></div>
          <div class="exp-card-row"><span class="exp-card-label">${t('category_col')}</span><span><span class="badge badge-blue">${catLabel(e.category)}</span></span></div>
          <div class="exp-card-row"><span class="exp-card-label">${t('amount_col')}</span><span class="td-money">${hk(e.amount)}</span></div>
          ${e.description ? `<div class="exp-card-row"><span class="exp-card-label">${t('description_col')}</span><span class="text-muted">${e.description}</span></div>` : ''}
          ${(slipUploadBtn || slipViewBtn || deleteBtn) ? `<div class="exp-card-actions">${slipUploadBtn}${slipViewBtn}${deleteBtn}</div>` : ''}
        </div>`);
    });
  }
  const rows = expRowsArr.join('');
  const cardHtml = expCardsArr.join('');

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('expenses_title')}</h2>
      ${!isViewer() ? `<div class="page-controls"><button class="btn btn-primary" onclick="showAddExpense()">${t('add_expense')}</button></div>` : ''}
    </div>

    <div class="section mb-16">
      <div class="section-header">
        <h3>${t('filter_month')}</h3>
        ${mkMonthInput(expMonth, '2026-01', 'changeExpMonth')}
      </div>
    </div>

    <div class="section mb-16">
      <div class="section-body" style="padding:16px 20px">
        <span style="font-size:15px;font-weight:600;color:var(--muted)">${t('total_expenses')}:</span>
        <span class="td-money" style="font-size:15px;margin-left:8px">${hk(grandTotal)}</span>
      </div>
    </div>

    <div class="exp-detail-filters mb-16">
      <select onchange="S.data.expUnit=this.value; renderExpenses()">
        <option value="">${t('all_units')}</option>
        ${unitOptions}
      </select>
      <select onchange="S.data.expCat=this.value; renderExpenses()">
        <option value="">${t('all_cats')}</option>
        <option value="govt_rent"    ${expCat==='govt_rent'    ?'selected':''}>${t('cat_govt_rent')}</option>
        <option value="govt_rates"   ${expCat==='govt_rates'   ?'selected':''}>${t('cat_govt_rates')}</option>
        <option value="repairs"      ${expCat==='repairs'      ?'selected':''}>${t('cat_repairs')}</option>
        <option value="insurance"    ${expCat==='insurance'    ?'selected':''}>${t('cat_insurance')}</option>
        <option value="stamp_duty"   ${expCat==='stamp_duty'   ?'selected':''}>${t('cat_stamp_duty')}</option>
        <option value="handling_fee" ${expCat==='handling_fee' ?'selected':''}>${t('cat_handling_fee')}</option>
        <option value="electricity"  ${expCat==='electricity'  ?'selected':''}>${t('cat_electricity')}</option>
        <option value="water"        ${expCat==='water'        ?'selected':''}>${t('cat_water')}</option>
        <option value="garbage"      ${expCat==='garbage'      ?'selected':''}>${t('cat_garbage')}</option>
        <option value="other"        ${expCat==='other'        ?'selected':''}>${t('cat_other')}</option>
      </select>
    </div>

    <div class="section">
      <div class="table-wrap exp-table-desktop">
        <table>
          <thead>
            <tr>
              <th class="col-mob-hide">${t('property_col')}</th><th class="col-exp-date">${t('date_col')}</th>
              <th class="col-exp-cat">${t('category_col')}</th><th class="td-right col-exp-amt">${t('amount_col')}</th>
              <th class="col-mob-hide">${t('description_col')}</th><th class="col-mob-hide"></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="exp-card-list">${cardHtml}</div>
    </div>`;
}

function showAddExpense() {
  Promise.all([
    api.get('/api/properties'),
    api.get('/api/tenants'),
  ]).then(([properties, rooms]) => {
    // Group active rooms by property_id
    const roomsByProp = {};
    rooms.forEach(r => {
      if (!roomsByProp[r.property_id]) roomsByProp[r.property_id] = [];
      roomsByProp[r.property_id].push(r);
    });

    let propOpts = '';
    properties.forEach(p => {
      const pRooms = roomsByProp[p.id] || [];
      if (pRooms.length > 1) {
        // Multi-room property: optgroup with property-level option first
        const roomInner = pRooms.map(r => {
          const ul = fmtUnit(r.property_code, r.room_label);
          return `<option value="${r.property_id}|${ul}">${ul}</option>`;
        }).join('');
        propOpts += `<optgroup label="${p.code}"><option value="${p.id}|${p.code}">${p.code}</option>${roomInner}</optgroup>`;
      } else if (pRooms.length === 1) {
        const r = pRooms[0];
        const ul = fmtUnit(r.property_code, r.room_label);
        propOpts += `<option value="${r.property_id}|${ul}">${ul}</option>`;
      }
    });

    openModal(t('add_expense'), `
      <form id="exp-form" onsubmit="submitExpense(event)">
        <div class="form-grid">
          <div class="form-group">
            <label>${t('property_lbl')} *</label>
            <select id="exp-prop" required>
              <option value="">— Select Unit —</option>
              <option value="0|General">General</option>
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
              <option value="electricity">${t('cat_electricity')}</option>
              <option value="water">${t('cat_water')}</option>
              <option value="garbage">${t('cat_garbage')}</option>
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
  const sel = $$('exp-prop');
  if (!sel.value) { alert('Please select a unit.'); return; }
  const [propIdStr, ...labelParts] = sel.value.split('|');
  const unitLabel = labelParts.join('|');
  const propId = (propIdStr && propIdStr !== '0') ? parseInt(propIdStr) : null;
  await api.post('/api/expenses', {
    property_id:  propId,
    unit_label:   unitLabel,
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

async function uploadExpenseSlip(expId, input) {
  if (!input.files || !input.files[0]) return;
  const file = input.files[0];
  const allowed = ['application/pdf', 'image/jpeg', 'image/png'];
  if (!allowed.includes(file.type)) { alert('Only PDF, JPG, PNG files are allowed.'); return; }

  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;top:20px;right:24px;background:#2563eb;color:#fff;padding:10px 18px;border-radius:8px;font-size:13px;font-weight:600;z-index:999;box-shadow:0 2px 8px rgba(0,0,0,.2)';
  toast.textContent = t('uploading_lbl');
  document.body.appendChild(toast);

  try {
    const base64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = ev => resolve(ev.target.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    await api.post(`/api/expenses/${expId}/slip`, { base64, contentType: file.type, filename: file.name });
    toast.textContent = '✓ Slip uploaded';
    toast.style.background = '#16a34a';
    setTimeout(() => toast.remove(), 2500);
    await renderExpenses();
  } catch (err) {
    toast.remove();
    alert('Upload failed: ' + err.message);
  }
}

async function viewExpenseSlip(expId) {
  try {
    const res = await fetch(`/api/expenses/${expId}/slip/view`, {
      headers: { Authorization: `Bearer ${S.token}` },
    });
    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      throw new Error(e.error || `HTTP ${res.status}`);
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  } catch (err) {
    alert('Could not open slip: ' + err.message);
  }
}

async function viewPaymentProof(payId) {
  try {
    const res = await fetch(`/api/payments/${payId}/proof`, {
      headers: { Authorization: `Bearer ${S.token}` },
    });
    if (!res.ok) {
      const e = await res.json().catch(() => ({}));
      throw new Error(e.error || `HTTP ${res.status}`);
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  } catch (err) {
    alert('Could not open proof: ' + err.message);
  }
}

// ── Annual Summary ───────────────────────────────────────────────────────────

async function renderSummary() {
  const fy = S.data.globalFY !== undefined ? String(S.data.globalFY) : String(currentFY());
  const data = await api.get(`/api/summary?fy=${fy}`);
  const { fyLabel: fyLbl, summary: s, propBreakdown, generalExpenses = {}, propertyExpenses = {} } = data;

  const afterTaxIncome = s.netIncome - s.propertyTax;
  const netCls      = s.netIncome     >= 0 ? 'text-success' : 'text-danger';
  const afterTaxCls = afterTaxIncome  >= 0 ? 'text-success' : 'text-danger';

  // Per-property breakdown: only Govt Rent deduction for tax calc
  const propBDHtml = propBreakdown.map(p => `
    <div class="prop-tax-card">
      <div class="prop-tax-header">${p.code} <span style="font-weight:400;font-size:12px;opacity:.8">${p.address}</span></div>
      <div class="tax-row"><span>${t('total_rental')}</span><strong>${hk(p.income)}</strong></div>
      ${p.expenses.govtRent > 0 ? `<div class="tax-row"><span>${t('less_govt_rent')}</span><strong>− ${hk(p.expenses.govtRent)}</strong></div>` : ''}
      <div class="tax-row" style="font-size:11px;color:var(--muted);padding-top:6px;border-top:1px dashed var(--border);margin-top:4px;font-style:italic">
        <span>${t('tax_formula')}</span>
      </div>
      <div class="tax-row total">
        <span>${t('est_tax')}</span><strong class="text-danger">${hk(p.tax)}</strong>
      </div>
    </div>`).join('');

  // Full expenses breakdown: General (null property_id) + Property (non-null)
  const expCatKeys = [
    ['govtRent',    () => t('less_govt_rent')],
    ['govtRates',   () => t('less_govt_rates')],
    ['repairs',     () => t('less_repairs')],
    ['insurance',   () => t('less_insurance')],
    ['stampDuty',   () => t('less_stamp_duty')],
    ['handlingFee', () => t('cat_handling_fee')],
    ['electricity', () => t('cat_electricity')],
    ['water',       () => t('cat_water')],
    ['garbage',     () => t('cat_garbage')],
    ['other',       () => t('cat_other')],
  ];
  const genTotal  = generalExpenses.total  || 0;
  const propTotal = propertyExpenses.total || 0;
  const genRows  = expCatKeys.filter(([k]) => generalExpenses[k]  > 0).map(([k, lbl]) => `<div class="tax-row"><span>${lbl()}</span><strong>${hk(generalExpenses[k])}</strong></div>`).join('');
  const propRows = expCatKeys.filter(([k]) => propertyExpenses[k] > 0).map(([k, lbl]) => `<div class="tax-row"><span>${lbl()}</span><strong>${hk(propertyExpenses[k])}</strong></div>`).join('');
  const expBreakdownHtml = `
    <div style="margin-top:20px">
      <div style="background:#f1f5f9;border:1.5px solid var(--border);border-radius:var(--radius);padding:14px">
        <div style="font-size:14px;font-weight:700;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border)">${S.lang==='tc'?'支出明細':'Expenses Breakdown'}</div>
        <div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">${t('gen_expenses')}</div>
        ${genRows || `<div style="color:var(--muted);font-size:12px;padding:2px 0">${S.lang==='tc'?'—':'—'}</div>`}
        <div class="tax-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:6px;font-weight:600">
          <span>${S.lang==='tc'?'小計':'Subtotal'}</span><strong>${hk(genTotal)}</strong>
        </div>
        <div style="font-size:11px;font-weight:700;color:var(--muted);margin-top:14px;margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px">${S.lang==='tc'?'物業支出':'Property Expenses'}</div>
        ${propRows || `<div style="color:var(--muted);font-size:12px;padding:2px 0">${S.lang==='tc'?'—':'—'}</div>`}
        <div class="tax-row" style="border-top:1px solid var(--border);margin-top:4px;padding-top:6px;font-weight:600">
          <span>${S.lang==='tc'?'小計':'Subtotal'}</span><strong>${hk(propTotal)}</strong>
        </div>
        <div class="tax-row" style="border-top:2px solid var(--accent);margin-top:10px;padding-top:10px;font-weight:700;font-size:14px">
          <span>${t('total_expenses')}</span><strong class="text-danger">${hk(s.totalExpenses)}</strong>
        </div>
      </div>
    </div>`;

  $$('view-container').innerHTML = `
    <div class="page-header">
      <h2>${t('summary_title')}</h2>
      <span style="font-weight:700;color:var(--accent);font-size:14px">${fyLbl}</span>
    </div>

    <div class="summary-stat-grid summary-stat-row1">
      <div class="stat-card green">
        <div class="stat-label">${t('total_income')}</div>
        <div class="stat-value" style="font-size:20px">${hk(s.totalIncome)}</div>
      </div>
      <div class="stat-card red">
        <div class="stat-label">${t('total_expenses')}</div>
        <div class="stat-value" style="font-size:20px">${hk(s.totalExpenses)}</div>
      </div>
      <div class="stat-card" style="border-color:${s.netIncome>=0?'var(--success)':'var(--danger)'}">
        <div class="stat-label">${t('mgmt_net_income')}</div>
        <div class="stat-value ${netCls}" style="font-size:20px">${hk(s.netIncome)}</div>
      </div>
    </div>

    <div class="summary-stat-grid summary-stat-row2">
      <div class="stat-card amber">
        <div class="stat-label">${t('est_tax')}</div>
        <div class="stat-value" style="font-size:20px">${hk(s.propertyTax)}</div>
        <div class="stat-formula">${t('tax_formula')}</div>
      </div>
      <div class="stat-card" style="border-color:${afterTaxIncome>=0?'var(--success)':'var(--danger)'}">
        <div class="stat-label">${t('after_tax_income')}</div>
        <div class="stat-value ${afterTaxCls}" style="font-size:20px">${hk(afterTaxIncome)}</div>
      </div>
    </div>

    <div class="section mt-16">
      <div class="section-header"><h3>🏠 ${t('prop_breakdown')}</h3></div>
      <div class="section-body">
        <div class="prop-tax-grid">${propBDHtml}</div>
        ${expBreakdownHtml}
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
  return { token: data.token, role: data.role || 'admin' };
}

function logout() {
  S.token = '';
  S.role = 'admin';
  localStorage.removeItem('token');
  localStorage.removeItem('role');
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
window.uploadExpenseSlip  = uploadExpenseSlip;
window.viewExpenseSlip    = viewExpenseSlip;
window.viewPaymentProof   = viewPaymentProof;
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
window.changeGlobalFY       = changeGlobalFY;
window.openMonthPicker      = openMonthPicker;
window.changeDashMonth      = changeDashMonth;
window.changePayMonth       = changePayMonth;
window.changeExpMonth       = changeExpMonth;
window.uploadTenantContract = uploadTenantContract;
window.viewTenantContract   = viewTenantContract;
window.openTenantEdit       = openTenantEdit;
window.saveTenantEdit       = saveTenantEdit;
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
      const { token, role } = await tryLogin(pw);
      S.token = token;
      S.role = role;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
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
