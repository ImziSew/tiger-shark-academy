"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  const [athleteName, setAthleteName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [city, setCity] = useState("");
  const [campLocation, setCampLocation] = useState("");

  const [swimmingExperience, setSwimmingExperience] = useState("");
  const [medicalCondition, setMedicalCondition] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");

  const [whatsapp, setWhatsapp] = useState("");
  const [tshirtSize, setTshirtSize] = useState("");
  const [paymentSlip, setPaymentSlip] = useState<File | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  let paymentSlipUrl = "";

  if (paymentSlip) {
    const fileName = `${Date.now()}-${paymentSlip.name}`;

    const { error: uploadError } = await supabase.storage
      .from("payment-slips")
      .upload(fileName, paymentSlip);

    if (uploadError) {
      setLoading(false);
      alert("Upload Error: " + uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("payment-slips")
      .getPublicUrl(fileName);

    paymentSlipUrl = data.publicUrl;
  }

  const { error } = await supabase
    .from("registrations")
    .insert([
      {
        athlete_name: athleteName,
        date_of_birth: dateOfBirth,
        age: Number(age),
        gender,
        parent_name: parentName,
        phone,
        whatsapp,
        email,
        city,
        camp_location: campLocation,
        swimming_experience: swimmingExperience,
        medical_condition: medicalCondition,
        emergency_contact: emergencyContact,
        tshirt_size: tshirtSize,
        payment_slip: paymentSlipUrl,
      },
    ]);

  setLoading(false);

  if (error) {
    alert("Error: " + error.message);
    console.error(error);
    return;
  }

  alert("Registration submitted successfully!");

  setAthleteName("");
  setDateOfBirth("");
  setAge("");
  setGender("");
  setParentName("");
  setPhone("");
  setWhatsapp("");
  setEmail("");
  setCity("");
  setCampLocation("");
  setSwimmingExperience("");
  setMedicalCondition("");
  setEmergencyContact("");
  setTshirtSize("");
  setPaymentSlip(null);
};
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="border-b border-blue-900 bg-[#03142e]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Tiger Shark"
              width={80}
              height={80}
            />

            <div>
              <h1 className="text-2xl font-bold">
                Tiger Shark Aquatic Academy
              </h1>

              <p className="text-sky-400 text-sm">
                Development Camp Registration 2026
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="bg-sky-500 hover:bg-sky-600 px-5 py-2 rounded-lg font-semibold"
          >
            Back Home
          </Link>

        </div>
      </div>

      {/* FORM */}
      <section className="max-w-4xl mx-auto px-6 py-12">

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

          <h2 className="text-4xl font-bold mb-2">
            Camp Registration
          </h2>

          <p className="text-gray-400 mb-8">
            Complete the form below to reserve your spot.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              value={athleteName}
              onChange={(e) => setAthleteName(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="Full Name"
              required
            />

            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              required
            />

            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="Age"
              required
            />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="Parent / Guardian Name"
              required
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="Phone Number"
              required
            />

            <input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="WhatsApp Number"
              required
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="Email"
              required
            />

            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="City"
              required
            />

            <select
              value={campLocation}
              onChange={(e) => setCampLocation(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              required
            >
              <option value="">Select Camp Location</option>
              <option value="Colombo">Colombo</option>
              <option value="Kandy">Kandy</option>
              <option value="Matara">Matara</option>
            </select>

            <select
              value={swimmingExperience}
              onChange={(e) => setSwimmingExperience(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              required
            >
              <option value="">Swimming Experience</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <select
              value={tshirtSize}
              onChange={(e) => setTshirtSize(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              required
            >
              <option value="">T-Shirt Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>

            <div className="bg-slate-800 p-6 rounded-xl border border-sky-500/20">

              <h3 className="text-xl font-bold text-sky-400 mb-4">
                Payment Information
              </h3>

              <div className="space-y-2 text-gray-300">

                <p>
                  <strong>Account Name:</strong> B D Shehan
                </p>

                <p>
                  <strong>Account Number:</strong> 74790949
                </p>

                <p>
                  <strong>Bank Name:</strong> Bank Of Ceylon
                </p>

                <p>
                  <strong>Branch:</strong> Enderamulla
                </p>

                <p>
                  <strong>Registration Fee:</strong> LKR 4,000
                </p>

              </div>

            </div>
            <div>
  <label className="block mb-2 font-medium">
    Upload Payment Slip
  </label>

  <input
    type="file"
    accept="image/*,.pdf"
    onChange={(e) =>
      setPaymentSlip(
        e.target.files ? e.target.files[0] : null
      )
    }
    className="w-full p-4 rounded-lg bg-slate-800"
    required
  />
</div>
            <textarea
              value={medicalCondition}
              onChange={(e) => setMedicalCondition(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              rows={4}
              placeholder="Medical Conditions (If Any)"
            />

            <input
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
              className="w-full p-4 rounded-lg bg-slate-800"
              placeholder="Emergency Contact Number"
              required
            />
            <label className="flex gap-3 items-start">
              <input type="checkbox" required />
              <span>
                I understand that the registration fee is
                LKR 4,000 and confirm my commitment to attend
                the training program.
              </span>
            </label>

            <label className="flex gap-3 items-start">
              <input type="checkbox" required />
              <span>
                I understand this is a professional training camp
                and agree to follow all safety instructions.
              </span>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-sky-500 hover:bg-sky-600 py-4 rounded-lg font-bold text-lg transition"
            >
              {loading ? "Submitting..." : "Submit Registration"}
            </button>

          </form>

        </div>

      </section>

    </main>
  );
}