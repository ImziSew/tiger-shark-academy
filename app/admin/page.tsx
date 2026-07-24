"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";


export default function AdminPage() {
  const [registrations, setRegistrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
const [password, setPassword] = useState("");
const [selectedCamp, setSelectedCamp] = useState("All");

  useEffect(() => {
    fetchRegistrations();
  }, []);

  async function fetchRegistrations() {
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setRegistrations(data || []);
    }

    setLoading(false);
  }

  function exportCSV() {

  const filtered =
    selectedCamp === "All"
      ? registrations
      : selectedCamp === "Unassigned"
      ? registrations.filter((r) => !r.camp_location)
      : registrations.filter(
          (r) => r.camp_location === selectedCamp
        );
  const headers = [
    "Name",
    "Age",
    "Gender",
    "City",
    "Camp",
    "Phone",
    "Email",
    "Experience",
    "Emergency Contact",
  ];

  const rows = filtered.map((reg) => [
    reg.athlete_name,
    reg.age,
    reg.gender,
    reg.city,
    reg.camp_location,
    reg.phone,
    reg.email,
    reg.swimming_experience,
    reg.emergency_contact,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${selectedCamp}-registrations-${
  new Date().toISOString().split("T")[0]
}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

if (!authenticated) {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-slate-900 p-8 rounded-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6">
          Admin Login
        </h1>

        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 mb-4"
        />

        <button
          onClick={() => {
            if (password === "TigerShark2026!") {
              setAuthenticated(true);
            } else {
              alert("Incorrect password");
            }
          }}
          className="bg-sky-500 hover:bg-sky-600 w-full py-3 rounded-lg font-semibold"
        >
          Login
        </button>
      </div>
    </main>
  );
}

  return (
  <main className="min-h-screen bg-black text-white p-8">
    <div className="max-w-7xl mx-auto">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold">
            Camp Registrations
          </h1>

          <p className="text-gray-400 mt-1">
            Tiger Shark Aquatic Academy
          </p>
        </div>

  <div className="flex gap-3">

  <select
    value={selectedCamp}
    onChange={(e) => setSelectedCamp(e.target.value)}
    className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3"
  >
    <option value="All">All Camps</option>
    <option value="Colombo">Colombo</option>
    <option value="Kandy">Kandy</option>
    <option value="Matara">Matara</option>
    <option value="Unassigned">Unassigned</option>
  </select>

  <button
    onClick={exportCSV}
    className="bg-sky-500 hover:bg-sky-600 px-5 py-3 rounded-lg font-semibold"
  >
    Export CSV
  </button>

</div>
      </div>

      <input
        type="text"
        placeholder="Search by name, phone, email or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 mb-8 p-3 rounded-lg bg-slate-900 border border-slate-700"
      />

      <div className="grid md:grid-cols-5 gap-4 mb-8">

        <div className="bg-slate-900 p-4 rounded-xl">
          <p className="text-gray-400">Total</p>
          <h3 className="text-3xl font-bold">
            {registrations.length}
          </h3>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl">
          <p className="text-gray-400">Colombo</p>
          <h3 className="text-3xl font-bold">
            {
              registrations.filter(
                (r) => r.camp_location === "Colombo"
              ).length
            }
          </h3>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl">
          <p className="text-gray-400">Kandy</p>
          <h3 className="text-3xl font-bold">
            {
              registrations.filter(
                (r) => r.camp_location === "Kandy"
              ).length
            }
          </h3>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl">
          <p className="text-gray-400">Matara</p>
          <h3 className="text-3xl font-bold">
            {
              registrations.filter(
                (r) => r.camp_location === "Matara"
              ).length
            }
          </h3>
        </div>

        <div className="bg-slate-900 p-4 rounded-xl">
          <p className="text-gray-400">Unassigned</p>
          <h3 className="text-3xl font-bold">
            {
              registrations.filter(
                (r) => !r.camp_location
              ).length
            }
          </h3>
        </div>

      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Age</th>
                <th className="p-3 text-left">Gender</th>
                <th className="p-3 text-left">City</th>
                <th className="p-3 text-left">Camp</th>
                <th className="p-3 text-left">Experience</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Payment Slip</th>
              </tr>
            </thead>

            <tbody>
              {registrations
                .filter((reg) => {
                  const q = search.toLowerCase();

                  return (
                    reg.athlete_name?.toLowerCase().includes(q) ||
                    reg.email?.toLowerCase().includes(q) ||
                    reg.phone?.toLowerCase().includes(q) ||
                    reg.city?.toLowerCase().includes(q)
                  );
                })
                .map((reg) => (
                  <tr
                    key={reg.id}
                    className="border-t border-slate-800 hover:bg-slate-900/40"
                  >
                    <td className="p-3">{reg.athlete_name}</td>
                    <td className="p-3">{reg.age}</td>
                    <td className="p-3">{reg.gender}</td>
                    <td className="p-3">{reg.city}</td>
                    <td className="p-3">{reg.camp_location}</td>
                    <td className="p-3">
                      {reg.swimming_experience}
                    </td>
                    <td className="p-3">{reg.phone}</td>
                    <td className="p-3">{reg.email}</td>

                    <td className="p-3">
                      {new Date(
                        reg.created_at
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-3">
                      {reg.payment_slip ? (
                        <a
                          href={reg.payment_slip}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 underline"
                        >
                          View Slip
                        </a>
                      ) : (
                        <span className="text-red-400">
                          No Slip
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  </main>
);
}