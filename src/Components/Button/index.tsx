import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames';

// button size
export enum ButtonSize {
  Large = 'lg',
  Middle = 'md',
  Small = 'sm'
}

export enum ButtonShape {
  Round= 'round',
  Circle = 'circle'
}

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Dashed = 'dashed',
  Link = 'link',
  Text = 'text',
  Danger = 'danger',
}
/**
 * onClick?: (event:MouseEvent) => void;
 * size?: ButtonSize;
 * block?: boolean;
 * danger?: boolean;
 * disabled?: boolean;
 * ghost?: boolean;
 * href?: string;
 * htmlType?: string;
 * icon?: ReactNode;
 * loading?: boolean | { delay: number };
 * shape?: ButtonShape;
 * target?: string;
 * btnType?: ButtonType;
 * children?: React.ReactNode;
 * className?: string;
 */
export interface BasicButtonProps {
  onClick?: (event:MouseEvent) => void; // 点击事件
  size?: ButtonSize; // 按钮尺寸
  block?: boolean; // 块级按钮
  danger?: boolean; // 是否危险按钮
  disabled?: boolean; // 是否禁用按钮
  ghost?: boolean; // 是否幽灵按钮
  href?: string;  // 链接地址
  htmlType?: string; // 按钮的html类型，submit等
  icon?: ReactNode; // 按钮图标
  loading?: boolean | { delay: number }; // 是否加载中状态
  shape?: ButtonShape; // 按钮形状
  target?: string; // 链接是否新开页面
  btnType?: ButtonType; // 按钮类型
  children?: React.ReactNode; // 后代节点
  className?: string; // 字符串
}

// Button的Html原始属性
type NativeButtonProps = BasicButtonProps & ButtonHTMLAttributes<HTMLElement>
// Anchor的Html原始属性
type AnchorButtonProps = BasicButtonProps & AnchorHTMLAttributes<HTMLElement>
// Partial表示将参数里的类型接口里所有的属性类型都变成可选的
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>


const Button:React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ghost,
    icon,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': disabled,
    'ghost': ghost,

  })
  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
};


export default Button;
