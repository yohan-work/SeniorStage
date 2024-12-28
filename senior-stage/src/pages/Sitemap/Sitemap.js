import React, { useEffect, useState } from "react";

const SiteMap = () => {
  const [tableData, setTableData] = useState([
    {
      depth1: "로그인",
      data: [
        {
          id: "SDP-R1-001",
          depth2: "로그인",
          path: "/user/login.html",
          status: "end",
          create: "2024.11.11",
          log: [],
        },
        {
          id: "SDP-R1-002",
          depth2: "회원가입",
          path: "/user/join.html",
          status: "end",
          create: "2024.11.13",
          log: [],
        },
      ],
    },
    {
      depth1: "동호회",
      data: [
        {
          id: "SDP-R1-004",
          depth2: "매칭 시스템",
          depth3: "동호회 메인",
          path: "/club/main.html",
          status: "end",
          create: "2024.11.18",
          log: [{ date: "2024.11.18", text: "test log" }],
        },
      ],
    },
  ]);

  useEffect(() => {
    document.title = "Happy SW";
  }, []);

  const renderTableRows = (data) => {
    return data.map((row, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.id}</td>
        <td>{row.depth2}</td>
        <td>{row.depth3 || "-"}</td>
        <td>
          {row.path ? (
            <a href={row.path} target="_blank" rel="noopener noreferrer">
              {row.path}
            </a>
          ) : (
            "-"
          )}
        </td>
        <td>{row.status === "end" ? "작업완료" : "작업중"}</td>
        <td>{row.create}</td>
        <td>
          {row.log.length > 0 ? (
            <ul>
              {row.log.map((log, logIndex) => (
                <li key={logIndex}>
                  [{log.date}] {log.text}
                </li>
              ))}
            </ul>
          ) : (
            "-"
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div style={{ padding: "20px", minWidth: "1900px", boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "30px", lineHeight: "40px", marginBottom: "20px" }}>사이트맵</h1>
      <div>
        {tableData.map((section, sectionIndex) => (
          <div key={sectionIndex} style={{ marginBottom: "20px" }}>
            <h2
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {section.depth1}
            </h2>
            <table style={{ width: "100%", borderSpacing: "0", marginTop: "10px" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Depth2</th>
                  <th>Depth3</th>
                  <th>Path</th>
                  <th>Status</th>
                  <th>Create</th>
                  <th>Log</th>
                </tr>
              </thead>
              <tbody>{renderTableRows(section.data)}</tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SiteMap;
