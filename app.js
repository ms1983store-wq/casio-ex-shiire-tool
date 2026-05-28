const marketData = [
  { model: "EX-H30", count: 18, overall: 8200, junk: { price: 3600, count: 4 }, good: { price: 11000, count: 8 }, fair: { price: 7900, count: 6 }, poor: { price: 5200, count: 3 }, veryPoor: { price: 3500, count: 2 } },
  { model: "EX-ZR10", count: 28, overall: 13200, junk: { price: 6300, count: 5 }, good: { price: 16800, count: 12 }, fair: { price: 13000, count: 9 }, poor: { price: 7600, count: 4 }, veryPoor: { price: 5000, count: 2 } },
  { model: "EX-ZR20", count: 20, overall: 11000, junk: { price: 6500, count: 4 }, good: { price: 14600, count: 8 }, fair: { price: 10500, count: 6 }, poor: { price: 7000, count: 3 }, veryPoor: { price: 5000, count: 2 } },
  { model: "EX-ZR50", count: 38, overall: 23500, junk: { price: 16700, count: 5 }, good: { price: 29900, count: 18 }, fair: { price: 22800, count: 12 }, poor: { price: 19000, count: 5 }, veryPoor: { price: 16700, count: 2 } },
  { model: "EX-ZR60", count: 20, overall: 34500, junk: { price: 22000, count: 3 }, good: { price: 36000, count: 10 }, fair: { price: 33300, count: 7 }, poor: { price: 25000, count: 4 }, veryPoor: { price: 18000, count: 2 } },
  { model: "EX-ZR70", count: 43, overall: 37500, junk: { price: 28600, count: 6 }, good: { price: 45200, count: 20 }, fair: { price: 35800, count: 14 }, poor: { price: 29800, count: 6 }, veryPoor: { price: 24250, count: 3 } },
  { model: "EX-ZR100", count: 46, overall: 12000, junk: { price: 8000, count: 7 }, good: { price: 14000, count: 21 }, fair: { price: 11100, count: 14 }, poor: { price: 8500, count: 6 }, veryPoor: { price: 6500, count: 3 } },
  { model: "EX-ZR200", count: 61, overall: 13200, junk: { price: 8500, count: 8 }, good: { price: 16000, count: 29 }, fair: { price: 12500, count: 18 }, poor: { price: 8800, count: 7 }, veryPoor: { price: 6600, count: 3 } },
  { model: "EX-ZR300", count: 38, overall: 13500, junk: { price: 9000, count: 6 }, good: { price: 18300, count: 17 }, fair: { price: 12800, count: 13 }, poor: { price: 8800, count: 5 }, veryPoor: { price: 5600, count: 2 } },
  { model: "EX-ZR400", count: 35, overall: 16800, junk: { price: 10800, count: 5 }, good: { price: 19800, count: 18 }, fair: { price: 16000, count: 12 }, poor: { price: 12800, count: 5 }, veryPoor: { price: 7400, count: 2 } },
  { model: "EX-ZR500", count: 16, overall: 15900, junk: { price: 10000, count: 3 }, good: { price: 18370, count: 7 }, fair: { price: 12888, count: 5 }, poor: { price: 7900, count: 3 }, veryPoor: { price: 6000, count: 1 } },
  { model: "EX-ZR700", count: 26, overall: 16800, junk: { price: 6300, count: 4 }, good: { price: 19900, count: 12 }, fair: { price: 15600, count: 9 }, poor: { price: 14000, count: 4 }, veryPoor: { price: 6300, count: 2 } },
  { model: "EX-ZR800", count: 23, overall: 16000, junk: { price: 7500, count: 4 }, good: { price: 19800, count: 10 }, fair: { price: 15500, count: 8 }, poor: { price: 7500, count: 3 }, veryPoor: { price: 3500, count: 1 } },
  { model: "EX-ZR850", count: 12, overall: 24600, junk: { price: 9000, count: 2 }, good: { price: 29600, count: 5 }, fair: { price: 24660, count: 4 }, poor: { price: 14100, count: 2 }, veryPoor: { price: 9000, count: 1 } },
  { model: "EX-ZR1000", count: 105, overall: 17800, junk: { price: 9999, count: 13 }, good: { price: 23800, count: 46 }, fair: { price: 16500, count: 34 }, poor: { price: 12900, count: 14 }, veryPoor: { price: 8000, count: 6 } },
  { model: "EX-ZR1100", count: 70, overall: 22000, junk: { price: 10480, count: 8 }, good: { price: 27800, count: 31 }, fair: { price: 20000, count: 23 }, poor: { price: 15000, count: 9 }, veryPoor: { price: 9000, count: 4 } },
  { model: "EX-ZR1300", count: 36, overall: 23800, junk: { price: 15000, count: 5 }, good: { price: 27800, count: 16 }, fair: { price: 23700, count: 12 }, poor: { price: 21600, count: 5 }, veryPoor: { price: 12000, count: 2 } },
  { model: "EX-ZR1600", count: 58, overall: 22700, junk: { price: 13500, count: 7 }, good: { price: 26900, count: 27 }, fair: { price: 22000, count: 20 }, poor: { price: 17800, count: 8 }, veryPoor: { price: 9900, count: 3 } },
  { model: "EX-ZR1700", count: 32, overall: 23800, junk: { price: 13800, count: 7 }, good: { price: 26700, count: 14 }, fair: { price: 22200, count: 11 }, poor: { price: 15800, count: 5 }, veryPoor: { price: 12800, count: 2 } },
  { model: "EX-ZR1800", count: 46, overall: 28800, junk: { price: 16800, count: 5 }, good: { price: 34900, count: 22 }, fair: { price: 27800, count: 16 }, poor: { price: 23000, count: 6 }, veryPoor: { price: 15000, count: 2 } },
  { model: "EX-ZR3000", count: 24, overall: 27000, junk: { price: 15000, count: 3 }, good: { price: 30000, count: 11 }, fair: { price: 26000, count: 8 }, poor: { price: 22000, count: 4 }, veryPoor: { price: 14000, count: 2 } },
  { model: "EX-ZR3100", count: 43, overall: 32000, junk: { price: 22800, count: 4 }, good: { price: 34800, count: 21 }, fair: { price: 30300, count: 15 }, poor: { price: 26000, count: 5 }, veryPoor: { price: 20000, count: 2 } },
  { model: "EX-ZR3200", count: 50, overall: 28800, junk: { price: 12000, count: 4 }, good: { price: 33800, count: 23 }, fair: { price: 27600, count: 17 }, poor: { price: 23700, count: 6 }, veryPoor: { price: 12000, count: 2 } },
  { model: "EX-ZR4000", count: 54, overall: 32500, junk: { price: 11000, count: 4 }, good: { price: 36800, count: 27 }, fair: { price: 31800, count: 19 }, poor: { price: 27000, count: 6 }, veryPoor: { price: 17500, count: 2 } },
];

const modelCollator = new Intl.Collator("ja-JP", { numeric: true, sensitivity: "base" });
const sortedMarketData = [...marketData].sort((a, b) => modelCollator.compare(a.model, b.model));

const colorRules = {
  silver: { label: "シルバー", factor: 1, note: "基準色として補正なし" },
  black: { label: "ブラック", factor: 1.03, note: "黒系はやや強めに補正" },
  white: { label: "ホワイト", factor: 1.05, note: "自撮り系で人気が強いため補正" },
  pink: { label: "ピンク", factor: 1.07, note: "EX-ZR50/70系の人気色として強めに補正" },
  gold: { label: "ゴールド", factor: 1.04, note: "流通が多く美品はやや上振れ" },
  red: { label: "レッド", factor: 1.04, note: "発色系カラーとして少し強めに補正" },
  other: { label: "その他", factor: 0.97, note: "流通が読みづらいため少し控えめ" },
};

const modeRules = {
  standard: {
    label: "標準",
    circle: { minProfit: 3000, roi: 25 },
    triangle: { minProfit: 1000, roi: 10 },
  },
  conservative: {
    label: "堅め",
    circle: { minProfit: 5000, roi: 35 },
    triangle: { minProfit: 2500, roi: 20 },
  },
  aggressive: {
    label: "攻め",
    circle: { minProfit: 2000, roi: 20 },
    triangle: { minProfit: 800, roi: 8 },
  },
};

const basisLabels = {
  overall: "全体中央値",
  junk: "ジャンク",
  good: "目立った傷なし",
  fair: "やや傷あり",
  poor: "傷あり",
  veryPoor: "全体的に悪い",
};

const yen = new Intl.NumberFormat("ja-JP", {
  style: "currency",
  currency: "JPY",
  maximumFractionDigits: 0,
});

const modelSelect = document.querySelector("#modelSelect");
const colorSelect = document.querySelector("#colorSelect");
const basisSelect = document.querySelector("#basisSelect");
const salePriceInput = document.querySelector("#salePrice");
const buyPriceInput = document.querySelector("#buyPrice");
const feeRateInput = document.querySelector("#feeRate");
const shippingPreset = document.querySelector("#shippingPreset");
const shippingCostInput = document.querySelector("#shippingCost");
const customShippingWrap = document.querySelector("#customShippingWrap");
const tableSearch = document.querySelector("#tableSearch");

const decisionBox = document.querySelector("#decisionBox");
const decisionMark = document.querySelector("#decisionMark");
const decisionLabel = document.querySelector("#decisionLabel");
const decisionNote = document.querySelector("#decisionNote");
const profitAmount = document.querySelector("#profitAmount");
const roiRate = document.querySelector("#roiRate");
const salesMargin = document.querySelector("#salesMargin");
const breakEven = document.querySelector("#breakEven");
const circleLimit = document.querySelector("#circleLimit");
const triangleLimit = document.querySelector("#triangleLimit");
const thresholdText = document.querySelector("#thresholdText");
const priceBars = document.querySelector("#priceBars");
const modelCount = document.querySelector("#modelCount");
const marketTable = document.querySelector("#marketTable");

function roundToHundred(value) {
  return Math.round(value / 100) * 100;
}

function getModel() {
  return marketData.find((item) => item.model === modelSelect.value) || sortedMarketData[0];
}

function getBasePrice(model, basis) {
  if (!model) return 0;
  if (basis === "overall") return model.overall;
  return model[basis]?.price ?? 0;
}

function getCount(model, basis) {
  if (!model) return 0;
  if (basis === "overall") return model.count;
  return model[basis]?.count ?? 0;
}

function getColorAdjustedPrice(model, basis, colorKey) {
  const base = getBasePrice(model, basis);
  const factor = colorRules[colorKey]?.factor ?? 1;
  return roundToHundred(base * factor);
}

function normalize(value) {
  return String(value || "").toUpperCase().replace(/\s+/g, " ").trim();
}

function activeMode() {
  return document.querySelector('input[name="judgeMode"]:checked')?.value || "standard";
}

function shippingCost() {
  if (shippingPreset.value === "custom") {
    return Number(shippingCostInput.value) || 0;
  }
  return Number(shippingPreset.value) || 0;
}

function maxBuyFor(netRevenue, rule) {
  if (netRevenue <= 0) return 0;
  const byProfit = netRevenue - rule.minProfit;
  const byRoi = netRevenue / (1 + rule.roi / 100);
  return Math.max(0, Math.floor(Math.min(byProfit, byRoi)));
}

function judge(profit, roi, rules) {
  if (profit >= rules.circle.minProfit && roi >= rules.circle.roi) return "circle";
  if (profit >= rules.triangle.minProfit && roi >= rules.triangle.roi) return "triangle";
  return "cross";
}

function updateSalePriceFromSelection() {
  const model = getModel();
  salePriceInput.value = getColorAdjustedPrice(model, basisSelect.value, colorSelect.value);
}

function renderBars(model) {
  const keys = ["overall", "junk", "good", "fair", "poor", "veryPoor"];
  const color = colorRules[colorSelect.value] || colorRules.silver;
  const maxPrice = Math.max(...keys.map((key) => getBasePrice(model, key)), getColorAdjustedPrice(model, basisSelect.value, colorSelect.value));
  const colors = {
    overall: "#2563eb",
    junk: "#b42318",
    good: "#0f766e",
    fair: "#b7791f",
    poor: "#9a3412",
    veryPoor: "#6b7280",
    adjusted: "#7c3aed",
  };

  const rows = keys.map((key) => {
    const price = getBasePrice(model, key);
    const count = getCount(model, key);
    return { key, label: `${basisLabels[key]}${key === "overall" ? "" : ` (${count})`}`, price, color: colors[key] };
  });

  rows.splice(1, 0, {
    key: "adjusted",
    label: `${color.label}補正後`,
    price: getColorAdjustedPrice(model, basisSelect.value, colorSelect.value),
    color: colors.adjusted,
  });

  modelCount.textContent = `${model.count}件 / ${color.note}`;
  priceBars.innerHTML = rows
    .map((row) => {
      const width = maxPrice ? Math.max(5, Math.round((row.price / maxPrice) * 100)) : 0;
      return `
        <div class="bar-row ${row.key === "adjusted" ? "adjusted-row" : ""}">
          <span>${row.label}</span>
          <div class="bar-track" aria-hidden="true">
            <div class="bar-fill" style="--bar:${width}%; --bar-color:${row.color}"></div>
          </div>
          <strong>${yen.format(row.price)}</strong>
        </div>
      `;
    })
    .join("");
}

function renderTable() {
  const query = normalize(tableSearch.value);
  marketTable.innerHTML = sortedMarketData
    .filter((item) => normalize(item.model).includes(query))
    .map((item) => {
      const selected = item.model === modelSelect.value ? "selected" : "";
      return `
        <tr class="${selected}" data-model="${item.model}">
          <td>${item.model}</td>
          <td>${yen.format(item.overall)}</td>
          <td>${yen.format(item.junk.price)}</td>
          <td>${yen.format(item.good.price)}</td>
          <td>${yen.format(item.fair.price)}</td>
          <td>${yen.format(item.poor.price)}</td>
          <td>${yen.format(item.veryPoor.price)}</td>
        </tr>
      `;
    })
    .join("");
}

function renderCalculator() {
  const model = getModel();
  const color = colorRules[colorSelect.value] || colorRules.silver;
  const salePrice = Number(salePriceInput.value) || 0;
  const buyPrice = Number(buyPriceInput.value) || 0;
  const feeRate = Number(feeRateInput.value) || 0;
  const fee = Math.round(salePrice * (feeRate / 100));
  const ship = shippingCost();
  const netRevenue = Math.max(0, salePrice - fee - ship);
  const profit = netRevenue - buyPrice;
  const roi = buyPrice > 0 ? (profit / buyPrice) * 100 : 0;
  const margin = salePrice > 0 ? (profit / salePrice) * 100 : 0;
  const rules = modeRules[activeMode()];
  const result = buyPrice > 0 ? judge(profit, roi, rules) : "triangle";
  const circleMax = maxBuyFor(netRevenue, rules.circle);
  const triangleMax = maxBuyFor(netRevenue, rules.triangle);

  decisionBox.className = `decision ${result}`;
  if (!buyPrice) {
    decisionMark.textContent = "△";
    decisionLabel.textContent = "仕入れ金額を入力";
    decisionNote.textContent = `${model.model} / ${color.label} / ${basisLabels[basisSelect.value]} ${yen.format(salePrice)} を基準に計算します。`;
  } else if (result === "circle") {
    decisionMark.textContent = "○";
    decisionLabel.textContent = "仕入れ候補";
    decisionNote.textContent = `利益 ${yen.format(profit)}、対仕入れ ${roi.toFixed(1)}%。${color.label}補正込みで基準を超えています。`;
  } else if (result === "triangle") {
    decisionMark.textContent = "△";
    decisionLabel.textContent = "条件次第";
    decisionNote.textContent = "利益は残ります。色、付属品、動作確認、市場のブレを見て判断してください。";
  } else {
    decisionMark.textContent = "×";
    decisionLabel.textContent = "見送り寄り";
    decisionNote.textContent = "基準未満です。値下げ交渉か、販売見込みの見直しが必要です。";
  }

  profitAmount.textContent = buyPrice ? yen.format(profit) : "-";
  profitAmount.className = profit >= 0 ? "positive" : "negative";
  roiRate.textContent = buyPrice ? `${roi.toFixed(1)}%` : "-";
  roiRate.className = roi >= 0 ? "positive" : "negative";
  salesMargin.textContent = buyPrice ? `${margin.toFixed(1)}%` : "-";
  salesMargin.className = margin >= 0 ? "positive" : "negative";
  breakEven.textContent = yen.format(netRevenue);
  circleLimit.textContent = yen.format(circleMax);
  triangleLimit.textContent = yen.format(triangleMax);
  thresholdText.textContent = `${rules.label}モード: ○は利益 ${yen.format(rules.circle.minProfit)} 以上かつ対仕入れ ${rules.circle.roi}% 以上、△は利益 ${yen.format(rules.triangle.minProfit)} 以上かつ対仕入れ ${rules.triangle.roi}% 以上。手数料 ${feeRate}% / 送料 ${yen.format(ship)} / 色補正 ${Math.round(color.factor * 100)}% で計算。`;

  renderBars(model);
  renderTable();
}

function init() {
  modelSelect.innerHTML = sortedMarketData
    .map((item) => `<option value="${item.model}">${item.model}</option>`)
    .join("");

  modelSelect.value = "EX-ZR1000";
  colorSelect.value = "silver";
  basisSelect.value = "overall";
  salePriceInput.value = getColorAdjustedPrice(getModel(), basisSelect.value, colorSelect.value);
  buyPriceInput.value = "";
  renderTable();
  renderCalculator();
}

modelSelect.addEventListener("change", () => {
  updateSalePriceFromSelection();
  renderCalculator();
});

colorSelect.addEventListener("change", () => {
  updateSalePriceFromSelection();
  renderCalculator();
});

basisSelect.addEventListener("change", () => {
  updateSalePriceFromSelection();
  renderCalculator();
});

salePriceInput.addEventListener("input", renderCalculator);
buyPriceInput.addEventListener("input", renderCalculator);
feeRateInput.addEventListener("input", renderCalculator);
shippingPreset.addEventListener("change", () => {
  const custom = shippingPreset.value === "custom";
  customShippingWrap.hidden = !custom;
  if (!custom) shippingCostInput.value = shippingPreset.value;
  renderCalculator();
});
shippingCostInput.addEventListener("input", renderCalculator);
document.querySelectorAll('input[name="judgeMode"]').forEach((input) => {
  input.addEventListener("change", renderCalculator);
});
tableSearch.addEventListener("input", renderTable);
marketTable.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-model]");
  if (!row) return;
  modelSelect.value = row.dataset.model;
  updateSalePriceFromSelection();
  renderCalculator();
});
document.querySelector("#resetButton").addEventListener("click", () => {
  modelSelect.value = "EX-ZR1000";
  colorSelect.value = "silver";
  basisSelect.value = "overall";
  salePriceInput.value = getColorAdjustedPrice(getModel(), basisSelect.value, colorSelect.value);
  buyPriceInput.value = "";
  feeRateInput.value = "10";
  shippingPreset.value = "750";
  shippingCostInput.value = "750";
  customShippingWrap.hidden = true;
  document.querySelector('input[name="judgeMode"][value="standard"]').checked = true;
  renderCalculator();
});

init();
