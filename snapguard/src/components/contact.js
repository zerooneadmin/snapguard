"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";

export default function Contact() {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cdca08c7-72e3-45df-bb42-e3f18216a816");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
          placeholder="Message"
          required
        ></Textarea>
        <Button className="w-full" type="submit">
          Submit Form
        </Button>
      </form>
      <Modal show={showModal} message={result} onClose={closeModal} />
    </div>
  );
}
