import Payment from "../models/Payment.js";
import PDFDocument from "pdfkit";

// ✅ CREATE PAYMENT
export const createPayment = async (req, res) => {
  try {
    const { serviceId, serviceName, amount } = req.body;

    const payment = new Payment({
      userId: req.user.id,
      serviceId,
      serviceName,
      amount,
      status: "pending",
    });

    const saved = await payment.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET USER PAYMENTS
export const getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ DOWNLOAD INVOICE (FIXED)
export const downloadInvoice = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    const doc = new PDFDocument();

    // Headers
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=invoice_${payment._id}.pdf`
    );

    doc.pipe(res);

    // 🧾 Invoice Content
    doc.fontSize(20).text("INVOICE", { align: "center" });
    doc.moveDown();

    doc.fontSize(12).text(`Invoice ID: ${payment._id}`);
    doc.text(`Date: ${new Date(payment.createdAt).toDateString()}`);
    doc.moveDown();

    doc.text(`Service: ${payment.serviceName}`);
    doc.text(`Amount: ₹${payment.amount}`);
    doc.text(`Status: ${payment.status}`);
    doc.moveDown();

    doc.text("Thank you for your business!", { align: "center" });

    doc.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error generating invoice" });
  }
};