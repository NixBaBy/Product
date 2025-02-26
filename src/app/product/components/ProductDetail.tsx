import React from "react";

type ProductDetailType = {
  images: string[];
  tittle: string;
  discounted: string;
  firstPrice: string;
  secondPrice: string;
  id: string;
  shopName: string;
};

const ProductDetail = ({
  fetchData,
}: {
  fetchData: ProductDetailType | null;
}) => {
  if (!fetchData) {
    return <p>Ачааллаж байна...</p>;
  }
  return (
    <div className=" flex flex-col gap-4">
      <div className="w-[100%] m-auto mt-10 bg-[#f4f4f5]">
        <div className="h-[40px] w-[200px] bg-white border-[1px] border-solid border-gray-200 flex justify-center items-center font-bold text-gray-500">
          <p>Зураган тайлбар</p>
        </div>
      </div>
      <div>
        {fetchData.images && fetchData.images.length > 0 ? (
          fetchData.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Зураг ${index}`}
              className="w-[600px] h-[600px]  mr-2 border-[1px] border-solid border-gray-200"
            />
          ))
        ) : (
          <p>Зураг байхгүй байна.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
