import React from "react";

import ReactSwipeButton from "react-swipe-button";

export default function SlidingButton({ onSucces, isSlide }) {
  return (
    <>
      {!isSlide && (
        <ReactSwipeButton
          text={
            <div className="bg-translucent-info ms-3 text-white">
              swipe to continue
            </div>
          }
          color="#5e72e4"
          onSuccess={onSucces}
        />
      )}
    </>
  );
}
