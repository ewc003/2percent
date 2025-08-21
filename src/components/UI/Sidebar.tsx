import styled from "styled-components";
import 'primeicons/primeicons.css';
import type { Feature } from "../../interfaces/features";
import { Link } from "react-router-dom";

type SidebarProps = {
    features: Feature[]
}

const Sidebar = ({ features }: SidebarProps) => {
    return (
        <SidebarContainer>
            <Button>E</Button>
            {
                features.map((f: Feature, idx) => {
                    return (
                        <Link to={`/webapp/${f.path}`}>
                            <Icon
                                key={idx}
                                $active={'page' === f.path}
                                className={f.icon}
                            />
                        </Link>
                    );
                })
            }
            <Icon className="pi pi-search" $active={true} />
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    paddingTop: "0.5rem",
    height: "100vh",
    width: "50px",
    borderRight: "1px solid #ccc",
    boxSizing: "border-box"
});

const Icon = styled.span<{ $active?: boolean }>`
    margin: 0;
    color: ${(props) => (props.$active ? "#BF4F74": "blue")};
    width: 32px;
    height: 32px;

    border: none;
    border-radius: 3px;
`;

const Button = styled.button`
    width: 32px;
    height: 32px;
    background-color: black;
    line-height: 16px;
    text-align: center;
    padding: 0;
    margin-bottom: 0.5rem
`