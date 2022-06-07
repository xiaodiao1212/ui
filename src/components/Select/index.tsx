// import React, { useEffect, useState } from "react";
// import classnames from "classnames";
// import { createUseStyles } from "react-jss";
// import { Theme } from "../../constants/theme";

// type DataItem = {
//   key: string;
//   value: string | number;
// };
// type RuleNames = "select";

// interface SelectProps {
//   data: DataItem[][];
//   children?: React.ReactNode;
//   className?: string;
//   value: string[];
//   open: boolean;
//   onClose: () => any;
//   onChange?: () => any;
//   onSelectChange: (
//     value: {
//       key: string;
//       value: string | number;
//     }[]
//   ) => any;
//   cssOptions?: React.CSSProperties;
// }

// const useStyles = createUseStyles<
//   RuleNames,
//   Pick<SelectProps, "cssOptions">,
//   Theme
// >((theme) => ({
//   select: ({ cssOptions }) => {
//     return { ...cssOptions };
//   },
// }));

// const Select = ({
//   value,
//   onSelectChange,
//   data,
//   open,
//   onClose,
//   children,
//   className,
//   cssOptions,
// }: SelectProps) => {
//   const classes = useStyles({ cssOptions });
//   const computedClassNames = classnames(classes.select, className);

//   const handleSelectedChange = (item: DataItem[]) => {
//     onSelectChange?.(item);
//   };
//   const handleClickDrawer = (e: any) => {
//     e.stopPropagation();
//     e.nativeEvent.stopImmediatePropagation();
//     onClose();
//   };
//   return (
//     <label
//       style={{
//         width: "2em",
//         height: "2em",
//         color: "white",
//         background: "red",
//       }}
//     >
//       {value}
//       <select
//         style={{ opacity: 0 }}
//         onChange={(e: any) => {
//           onChange(e.target.value);
//         }}
//       >
//         {/* <option value={1}>{v.rightText}</option> */}
//         <option value="20" key="self">
//           Phone
//         </option>
//         <option value="10" key="other">
//           Message
//         </option>
//         <option value="30" key="contact">
//           WhatsApp
//         </option>
//       </select>
//     </label>
//   );
// };

// export default Select;
