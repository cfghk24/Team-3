import { People } from '@mui/icons-material';
import { Montserrat, Poppins, Lato } from 'next/font/google'; 

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  boxWidthSmall: "xl:max-w-[640px] w-[35%]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexJustifyStart: "flex justify-start items-center",
  flexJustifyEnd: "flex justify-end items-center",

  flexBetween: "flex justify-between items-center",
  flexEnd: "flex justify-between items-end",
  
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  paddingAll: "sm:px-16 px-6 sm:py-12 py-2",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  blackNormal: `font-normal text-main_black`,
  blackMedium: `font-medium text-main_black`,
  blackSemibold: `font-semibold text-main_black`,
  blackBold: `font-bold text-main_black`,

  whiteNormal: `font-normal text-white`,
  whiteMedium: `font-medium text-white`,
  whiteLarge: `font-large text-white`,
  whiteBold: `font-bold text-white`,
  whiteSemibold: `font-semibold text-white`,

  grayNormal: `font-normal text-text_color`,
  grayMedium: `font-medium text-text_color`,
  graySemibold: `font-semibold text-text_color`,

  fontTitle: `text-3xl tracking-[0.25px]`,
  fontDesc: `text-lg tracking-[0.25px]`,
  fontMedium: `text-md tracking-[0.25px]`,
  fontSmall: `text-sm tracking-[0.25px]`,

  montserratClass: montserrat.className,
  poppinsClass: poppins.className,
  latoClass: lato.className,
};

export default styles;
