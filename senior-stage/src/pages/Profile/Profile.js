import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [field, setField] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`프로필 저장됨: ${name}, ${region}, ${field}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto py-16">
      <h2 className="text-2xl font-bold mb-6 text-center">프로필 작성</h2>
      <input
        type="text"
        placeholder="이름"
        className="w-full mb-4 px-4 py-2 border rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="지역"
        className="w-full mb-4 px-4 py-2 border rounded-md"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      />
      <input
        type="text"
        placeholder="전문 분야"
        className="w-full mb-4 px-4 py-2 border rounded-md"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500">
        프로필 저장
      </button>
    </form>
  );
}

export default Profile;
