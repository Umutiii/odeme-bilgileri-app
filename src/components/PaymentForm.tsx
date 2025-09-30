import { useState } from "react";

function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Kart Üzerindeki İsim: ${name}\nKart Numarası: ${cardNumber}\nAy: ${month}\nYıl: ${year}\nCVV: ${cvv}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm w-full max-w-md border border-gray-200"
    >
      <h2 className="text-xl font-semibold mb-1">Ödeme Bilgileri</h2>
      <p className="text-gray-500 text-sm mb-4">
        Kredi kartı bilgilerinizi giriniz
      </p>

      {/* Kart Üzerindeki İsim */}
      <label className="block text-sm font-medium mb-1">
        Kart Üzerindeki İsim
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ahmet Yılmaz"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80"
        required
      />

      {/* Kart Numarası */}
      <label className="block text-sm font-medium mb-1">Kart Numarası</label>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => {
          let value = e.target.value.replace(/\D/g, ""); // sadece rakam
          value = value.slice(0, 16); // max 16 hane
          // 4 haneli gruplara ayır
          const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");
          setCardNumber(formatted);
        }}
        placeholder="0000 0000 0000 0000"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80"
        required
      />

      {/* Ay, Yıl, CVV */}
      <div className="flex gap-2 mb-4">
        {/* Ay */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Ay</label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80"
            required
          >
            <option value="">AA</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <option key={m} value={m}>
                {m.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>

        {/* Yıl */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Yıl</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80"
            required
          >
            <option value="">YY</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        {/* CVV */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">
            Güvenlik Kodu
          </label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => {
              let value = e.target.value.replace(/\D/g, ""); // sadece rakam
              value = value.slice(0, 3); // max 3 hane
              setCvv(value);
            }}
            placeholder="123"
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/80"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-black/90 transition"
      >
        Şimdi Öde
      </button>
    </form>
  );
}

export default PaymentForm;
