import { useEffect, useState } from "react";

function Admin() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    const res = await fetch("http://localhost:3001/leads");
    const data = await res.json();
    setLeads(data);
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 CRM Dashboard</h1>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Device</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.phone}</td>
              <td>{lead.device}</td>
              <td>{lead.issue}</td>
              <td>{lead.status}</td>
              <td>{lead.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;