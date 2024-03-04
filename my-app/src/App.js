import React, { useState, useEffect } from 'react';

const App = () => {
  const [imageIds, setImageIds] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  const [selectedImageId, setSelectedImageId] = useState(imageIds[0]);

  const selectImage = (id) => {
    setSelectedImageId(id);
  };

  const selectNextImage = () => {
    const currentIndex = imageIds.indexOf(selectedImageId);
    if (currentIndex < imageIds.length - 1) {
      setSelectedImageId(imageIds[currentIndex + 1]);
    }
  };

  const selectPreviousImage = () => {
    const currentIndex = imageIds.indexOf(selectedImageId);
    if (currentIndex > 0) {
      setSelectedImageId(imageIds[currentIndex - 1]);
    }
  };

  useEffect(() => {
    // Add any initialization logic here if needed
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {imageIds.map((id) => (
          <div key={id} className="thumbnail" onClick={() => selectImage(id)}>
            <img
              className={`cursor-pointer max-w-none w-s h-12 m-1 ${id === selectedImageId ? 'selected' : 'dim'}`}
              src={`https://picsum.photos/id/${id}/50/50`}
              alt="Thumbnail"
            />
          </div>
        ))}
      </div>

      <div className="my-5 flex justify-center items-center">
        {/*prev*/}
        <button
          onClick={selectPreviousImage}
          className="px-4 py-2 mx-2 bg-blue-200 rounded hover:bg-blue-400"
        >
          {'<'}
        </button>

        <img
          className="max-w-full h-auto"
          src={`https://picsum.photos/id/${selectedImageId}/350/350`}
          alt="Large Image"
        />

        {/*next*/}
        <button
          onClick={selectNextImage}
          className="px-4 py-2 mx-2 bg-blue-200 rounded hover:bg-blue-400"
        >
          {'>'}
        </button>
      </div>
    </>
  );
};

export default App;