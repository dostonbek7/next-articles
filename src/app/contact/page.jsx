import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div>
      <h2 className="text-2xl mb-4 font-semibold">Contact</h2>
      <p className="text-lg mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        laboriosam doloribus asperiores consectetur rem velit officia itaque,
        deleniti repudiandae qui mollitia illo harum cum neque totam dicta animi
        quos ducimus sequi ratione vel! Error nemo quidem, possimus dignissimos
        delectus blanditiis, quos suscipit rem obcaecati maxime molestias
        nostrum omnis mollitia expedita.
      </p>
      <div className="flex gap-2">
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href="/contact/faq"
        >
          FAQ
        </Link>
        <Link
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href="/contact/form"
        >
          Form
        </Link>
      </div>
    </div>
  );
}

export default Contact;
