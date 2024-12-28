import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock form submission logic
    console.log("Form submitted: ", formData);
    setSuccessMessage("문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.");

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">문의하기</h1>
      <p className="text-center text-gray-600 mb-8">
        궁금한 점이나 문의 사항이 있으시면 아래 양식을 작성해주세요.
      </p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">이름</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">이메일</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">문의 내용</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400"
        >
          문의하기
        </button>
      </form>

      {successMessage && (
        <p className="mt-4 text-center text-green-500 font-medium">{successMessage}</p>
      )}
    </div>
  );
}

export default Contact;