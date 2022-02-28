/** @jsxImportSource @emotion/react */

import { Theme } from '../../constants/theme';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTheme, css } from '@emotion/react';
import Overlay from '../Overlay';
import ReactDOM from 'react-dom';

type DrawerProps = {
  width?: string;
  height?: string;
  position?: 'left' | 'right' | 'top' | 'bottom';
  open?: boolean;
  backdrop?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClose?: (e: any) => any;
  co?: ((theme: Theme) => React.CSSProperties) | React.CSSProperties;
};

/**
 * React component that like the DrawerLayout (Android only).
 * The Drawer (typically used for navigation) is rendered with List and
 * direct children are the main view (where your children goes).
 * The component is initially not visible on the screen,
 * but can be pulled in from the side of the window specified by
 * the position prop and its width can be set by the width prop.
 *
 * ```js
 * const csvUrl =
 * 'https://storage.googleapis.com/tfjs-examples/multivariate-linear-regression/data/boston-housing-train.csv';
 *
 * async function run() {
 *   // We want to predict the column "medv", which represents a median value of
 *   // a home (in $1000s), so we mark it as a label.
 *   const csvDataset = tf.data.csv(
 *     csvUrl, {
 *       columnConfigs: {
 *         medv: {
 *           isLabel: true
 *         }
 *       }
 *     });
 *
 *   // Number of features is the number of column names minus one for the label
 *   // column.
 *   const numOfFeatures = (await csvDataset.columnNames()).length - 1;
 *
 *   // Prepare the Dataset for training.
 *   const flattenedDataset =
 *     csvDataset
 *     .map(({xs, ys}) =>
 *       {
 *         // Convert xs(features) and ys(labels) from object form (keyed by
 *         // column name) to array form.
 *         return {xs:Object.values(xs), ys:Object.values(ys)};
 *       })
 *     .batch(10);
 *
 *   // Define the model.
 *   const model = tf.sequential();
 *   model.add(tf.layers.dense({
 *     inputShape: [numOfFeatures],
 *     units: 1
 *   }));
 *   model.compile({
 *     optimizer: tf.train.sgd(0.000001),
 *     loss: 'meanSquaredError'
 *   });
 *
 *   // Fit the model using the prepared Dataset
 *   return model.fitDataset(flattenedDataset, {
 *     epochs: 10,
 *     callbacks: {
 *       onEpochEnd: async (epoch, logs) => {
 *         console.log(epoch + ':' + logs.loss);
 *       }
 *     }
 *   });
 * }
 *
 * await run();
 * ```
 *
 * @param source URL or local path to get CSV file. If it's a local path, it
 * must have prefix `file://` and it only works in node environment.
 * @param csvConfig (Optional) A CSVConfig object that contains configurations
 *     of reading and decoding from CSV file(s).
 *
 * @doc {
 *   heading: 'Data',
 *   subheading: 'Creation',
 *   namespace: 'data',
 *   configParamIndices: [1]
 *  }
 */
const Drawer = ({
  width = '60vw',
  height = 'auto',
  position = 'left',
  open = false,
  backdrop = true,
  onClose,

  children,
  className,
  co,
}: DrawerProps) => {
  const [closeStyle, setCloseStyle] = useState({});
  const [baseYOffset, setBaseYOffset] = useState(height != 'auto' ? height : '-100vh');
  const [baseXOffset, setBaseXOffset] = useState('-' + width);
  const [contentStyle, setContentStyle] = useState({});
  const [openStyle, setOpenStyle] = useState({});
  const [kfOut, setKfOut] = useState({});
  const [kfIn, setKfIn] = useState({});
  const theme = useTheme() as Theme;

  const contentStyles = css({
    touchAction: 'none',
    background: 'white',
    paddingTop: '8px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    ...contentStyle,
    transition: 'all .3s',
    ...(open ? openStyle : { ...closeStyle }),
    ...(co && (typeof co == 'function' ? co(theme) : co)),
  });

  const backdropStyles = css({
    touchAction: 'none',
    position: 'fixed',
    zIndex: theme.zIndex.drawer,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
    transition: 'backgroundColor 1s',
    visibility: open ? 'visible' : 'hidden',
  });
  const computedClassNames = clsx(className);
  const handleClickBackDrop = (e: any) => {
    onClose?.(e);
  };

  React.useEffect(() => {
    let to: any = {
      left: '-' + width,
    };
    let from: any = {
      left: '0',
    };
    let from2: any = {
      left: '-' + width,
    };
    let to2: any = {
      left: '0',
    };
    switch (position) {
      case 'right':
        from2 = to = {
          right: '-' + width,
        };
        to2 = from = {
          right: '0',
        };
        setContentStyle({
          width: width,
          height: '100%',
          right: baseXOffset,
          top: '0',
          bottom: '0',
        });
        setOpenStyle({ right: 0 });
        break;
      case 'top':
        from2 = to = {
          top: '-' + height == 'auto' ? '100vh' : height,
        };
        to2 = from = {
          top: '0',
        };
        setContentStyle({
          width: '100%',
          height: height == 'auto' ? '40vh' : height,
          left: 0,
          right: 0,
          top: baseYOffset,
        });
        setOpenStyle({ top: 0 });
        break;
      case 'bottom':
        from2 = to = {
          bottom: '-' + height == 'auto' ? '100vh' : height,
        };
        to2 = from = {
          bottom: '0',
        };
        setContentStyle({
          width: '100%',
          height: height == 'auto' ? '40vh' : height,
          left: 0,
          right: 0,
          bottom: baseYOffset,
        });
        setOpenStyle({ bottom: 0 });
        break;
      case 'left':
        setContentStyle({
          width: width,
          height: '100%',
          left: baseXOffset,
          top: '0',
          bottom: '0',
        });
        setOpenStyle({ left: 0 });
        break;
      default:
        break;
    }
    setBaseYOffset(height != 'auto' ? height : '-100vh');
    setBaseXOffset('-' + width);
    setKfOut({
      from: from,
      to: to,
    });
    setKfIn({
      from: from2,
      to: to2,
    });
  }, [position, width, height]);
  return (
    <aside>
      {backdrop && <div css={backdropStyles} className={computedClassNames} onClick={handleClickBackDrop}></div>}
      <div css={contentStyles}>{children}</div>
    </aside>
  );
};

export default Drawer;
