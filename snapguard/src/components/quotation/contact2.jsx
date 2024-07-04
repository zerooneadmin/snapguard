import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Modal from "../Modal";

export default function Contact2({ closeModal, setShowModal, setResult }) {
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "e7eade76-403c-4ed9-80c0-a6b11a2dafcc");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setShowModal(true); // Show the modal
      closeModal(); // Close the dialog box
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <Input
          className="w-full"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <Input
          className="w-full"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <Textarea
          className="w-full"
          name="message"
          placeholder="Brief description about the nature of your application"
          required
        ></Textarea>
        <Button className="w-full bg-gray-300" type="submit">
          Submit Form
        </Button>
      </form>
    </div>
  );
}
