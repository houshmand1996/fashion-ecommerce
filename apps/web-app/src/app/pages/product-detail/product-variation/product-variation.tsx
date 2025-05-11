import { ExportIcon } from '@code-dudes/fashion-ecommerce/icon';
import { cn } from '@code-dudes/fashion-ecommerce/ui-kit';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const ProductVariation = ({
  product,
  colors,

  variation,
}: {
  product: modules.BProduct[];
  colors: string[];
  variation: number | null;
}) => {
  const [sizes, setSizes] = useState<string[]>([]);
  const indexProduct = product.find((ar) => ar.product_variant_id == variation);
  const size = indexProduct?.size_name;
  const color = indexProduct?.color_name;
  useEffect(() => {
    setSizes([]);
    product?.forEach((ar) => {
      if (ar.color_name == color) {
        ar.size_name &&
          setSizes((per) => {
            if (per.find((arr) => arr == ar.size_name)) return per;

            return per
              ? [...per, ar.size_name as string]
              : [ar.size_name as string];
          });
      }
    });
  }, [color]);
  return (
    <div id="productVariation" className="mt-[6px] mb-[24.52px] w-full ">
      <div
        id="innerDetail"
        className="inline-flex flex-col justify-center items-start gap-2
            pl-[15.5px] mt-3 pr-4  w-full
            "
      >
        <div className="flex justify-between w-full">
          <p
            className="text-center text-[16px] uppercase
            tracking-[4px]
            "
          >
            {product[0].name}
          </p>
          <ExportIcon className="w-4 h-4 fill-none" />
        </div>
        <p
          className=" text-[16px] capitalize
            text-label
             "
        >
          {product[0].description}
        </p>
        <p className="text-[18px] text-secondary capitalize">
          ${product[product.findIndex((arr) => arr.color_name == color)]?.price}
        </p>
      </div>
      <div
        id="custom"
        className={cn(
          'flex flex-wrap pl-4 pt-[18.39px]',
          sizes.length > 3 ? 'flex-col gap-5' : 'gap-[35.24px]'
        )}
      >
        <div id="color" className=" flex gap-[8.29px] items-center ">
          <p className="text-label text-[13px]/[14px]">Color</p>
          <div className="flex gap-3 ">
            {colors.map((ar, i) => (
              <div
                key={i}
                className={cn(
                  'w-[22.24px] h-[22.24px]  border-2 rounded-full flex items-center justify-center',
                  color == ar && 'border-[#888]'
                )}
              >
                <Link
                  href={`?variation=${
                    product.find((arr) => ar == arr.color_name)
                      ?.product_variant_id
                  }`}
                  className=" w-4 h-4  rounded-full "
                  style={{
                    backgroundColor:
                      product[product.findIndex((arr) => arr.color_name == ar)]
                        .color_hex,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div id="size" className={' flex gap-[8.29px] items-center'}>
          <p className="text-[13px]/[14px] text-label">Size</p>
          {sizes.map((ar, i) =>
            (product.find((arr) => arr.size_name === ar)?.stock as number) >
            0 ? (
              <Link
                href={`?variation=${
                  product.find(
                    (arr) =>
                      arr.size_name == ar &&
                      product.find(
                        (arrr) => arrr.product_variant_id == variation
                      )?.color_name == arr.color_name
                  )?.product_variant_id
                }`}
                key={i}
                className={cn(
                  'w-6 h-6 border-[#DEDEDE] border-[1px] rounded-full text-[10px]/[12px] text-center text-label flex justify-center items-center ',
                  size == ar && 'bg-black text-[#f9f9f9]'
                )}
                scroll={false}
              >
                <p>{ar}</p>
              </Link>
            ) : (
              <button
                key={i}
                disabled={true}
                className="w-6 h-6 border-[#DEDEDE] border-[1px] rounded-full text-[10px]/[12px] text-center text-label flex justify-center items-center relative "
              >
                <p className="absolute w-[1px] rotate-45 h-full bg-black" />
                {ar}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};
