

const PaymentCards = () => {
  return (
    <div className="flex flex-wrap gap-4">
    {[
      '/cards/mastercard.png',
      '/cards/visa.png',
      '/cards/maestro.png',
      '/cards/paypal.png',
      '/cards/amazonpay.png',
      '/cards/amex.png',
      '/cards/klarna.png'
    ].map((src, idx) => (
      <img key={idx} src={src} alt="payment" className="h-6" />
    ))}
  </div>
  )
}

export default PaymentCards