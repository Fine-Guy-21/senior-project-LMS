import { cva } from "class-variance-authority";

const test = cva("p-4", {
    variants: {
        color: {
            red: "text-red-500",
            blue: "text-blue-500",
        },
    },
});

console.log(test({ color: "red" }));
