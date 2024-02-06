import { Suspense } from "react";
import lazy from "react-lazy-named";

const MotionImg = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.img,
  }))
);

export const AnimateImg = (props) => (
  <Suspense
    fallback={
      //   <img className={props.className} src={props.src} alt={props.alt} />
      null
    }
  >
    <MotionImg {...props} />
  </Suspense>
);

const MotionLi = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.li,
  }))
);

export const AnimateLi = (props) => (
  <Suspense
    fallback={
      null
      //   <li className={props.className}>{props.children}</li>
    }
  >
    <MotionLi {...props} />
  </Suspense>
);

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.div,
  }))
);

export const AnimateDiv = (props) => (
  <Suspense
    fallback={
      //   <div className={props.className}>{props.children}</div>
      null
    }
  >
    <MotionDiv {...props} />
  </Suspense>
);

const MotionHOne = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.h1,
  }))
);

export const AnimateHOne = (props) => (
  <Suspense fallback={null}>
    <MotionHOne {...props} />
  </Suspense>
);

const MotionP = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.p,
  }))
);

export const AnimateP = (props) => (
  <Suspense
    fallback={
      null
      //   <p className={props.className}>{props.children}</p>
    }
    null
  >
    <MotionP {...props} />
  </Suspense>
);

const MotionA = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.a,
  }))
);

export const AnimateA = (props) => (
  <Suspense
    fallback={
      //   <a className={props.className} href={props.href}>
      //     {props.children}
      //   </a>
      null
    }
  >
    <MotionA {...props} />
  </Suspense>
);
