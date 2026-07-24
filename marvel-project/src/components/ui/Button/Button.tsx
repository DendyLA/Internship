import Link from "next/link";

type BaseProps = {
    children: string;
    color: 'red' | 'grey';
    className?: string;
}

type LinkButtonProps = BaseProps & {
    href: string;
    onClick?: never;
};

type ActionButtonProps = BaseProps & {
    onClick: () => void;
    href?: never;
};

type ButtonProps = LinkButtonProps | ActionButtonProps;

export default function Button (props: ButtonProps) {
    const { children, color, className = "" } = props;
    const styles = `${className} text-center text-white tracking-wide px-10 py-4 [clip-path:polygon(0_0,100%_0,100%_70%,92%_100%,0_100%,0_30%,8%_0)]`;
    const colorTypes = {
        red: "bg-[#9F0013] hover:bg-[#db2a3fe7]",
        grey: "bg-[#5C5C5C] hover:bg-[#3a3535]",
    };
    if (props.href !== undefined) {
    return (
        <Link
            href={props.href}
            className={`${colorTypes[color]} ${styles}`}
        >
            {children}
        </Link>
    );
    }
    return (
    <button
        onClick={props.onClick}
        className={`${colorTypes[color]} ${styles}`}
    >
        {children}
    </button>
);
}