import React from "react";
import img from "../img/profile-thumbnail.png";

function Testimonial() {
  return (
    <div className="w-[300px] bg-white border shadow-md mx-auto  my-60 p-4 space-y-2 rounded-md">
      <div className="flex space-x-3">
        <img src={img} alt="sarah" className="w-10 object-cover" />
        <div className="flex flex-col">
          <h2 className="font-bold">Sarah Dole</h2>
          <span>@sarahdole</span>
        </div>
      </div>
      <p>I've been searching for high quality abstract images for my design projects, and i'm thrilled to have found this platform. the variety and depth of creativity are astounding.</p>
    </div>
  );
}

export default Testimonial;
