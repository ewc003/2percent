import "./footer.css";

type FooterProps = {
    label: string;
}

function Footer({label }: FooterProps) {
    return (
        <footer className="you-footer">
            <p>{label}</p>
        </footer>
    );
};

export default Footer;