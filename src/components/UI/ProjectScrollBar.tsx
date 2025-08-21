import styled from "styled-components";
import 'primeicons/primeicons.css';
import { type Feature, type QueryOption } from "../../interfaces/features";

const features: Feature[] = [
    {
        path: 'tasks/today',
        label: 'Today',
        icon: 'pi pi-clock'
    },
    {
        path: 'tasks/week',
        label: 'This Week',
        icon: 'pi pi-calendar-clock'
    },
    {
        path: 'tasks/backlog',
        label: 'Backlog',
        icon: 'pi pi-list'
    },
];

const lists: QueryOption[] = [
    {
        id: "123",
        label: "Exercise",
        icon: "🏃🏻‍♂️"
    },
    {
        id: "124",
        label: "Study",
        icon: "📚"
    },
];

const tags: QueryOption[] = [
    {
        id: "1",
        label: "Important",
        icon: "pi pi-tag",
        color: "black",
    },
    {
        id: "2",
        label: "Mandatory",
        icon: "pi pi-tag",
        color: "red",
    },
];

const staticOptions: Feature[] = [
    {
        path: 'all/completed',
        label: 'Completed',
        icon: 'pi pi-check-square'
    },
    {
        path: 'all/trash',
        label: 'Trash',
        icon: 'pi pi-trash'
    },
];

const ProjectScrollBar = () => {
    return (
        <LeftListView>
            <ItemContainer>
                {/* Features */}
                {
                    features.map((f: Feature, idx) => {
                        return (
                            <ListItem key={idx}>
                                <Icon
                                    $active={false}
                                    className={f.icon}
                                />
                                <Label>{f.label}</Label>
                            </ListItem>
                        );
                    })
                }
            </ItemContainer>
            <ItemContainer>
                {/* Lists */}
                {
                    lists.map((l: QueryOption, idx) => {
                        return (
                            <ListItem key={idx}>
                                <Icon>{l.icon}</Icon>
                                <Label>{l.label}</Label>
                            </ListItem>
                        );
                    })
                }
            </ItemContainer>
            <ItemContainer>
                {/* Tags */}
                {
                    tags.map((l: QueryOption, idx) => {
                        return (
                            <ListItem key={idx}>
                                <Icon
                                    $active={false}
                                    className={l.icon}
                                />
                                <Label>{l.label}</Label>
                                <Circle $color={l.color} />
                            </ListItem>
                        );
                    })
                }
            </ItemContainer>
            <ItemContainer>
                {/* Static options */}
                {
                    staticOptions.map((f: Feature, idx) => {
                        return (
                            <ListItem key={idx}>
                                <Icon
                                    $active={false}
                                    className={f.icon}
                                />
                                <Label>{f.label}</Label>
                            </ListItem>
                        );
                    })
                }
            </ItemContainer>
        </LeftListView>
    );
}

export default ProjectScrollBar;

const LeftListView = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0,
    height: "100vh",
    maxWidth: "450px",
    minWidth: "175px",
    borderRight: "1px solid #ccc",
    boxSizing: "border-box",
});

const Label = styled.p`
    line-height: 12px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
`;

const Circle = styled.div<{ $color?: string }>`
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 0.5rem;
    margin-left: auto;
    margin-right: 0.5rem;
    background-color: ${(props) => (props.$color)};
`;

const ItemContainer = styled.div`
    width: 90%;
    &:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }
`;

const ListItem = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 150px;
`;

const Icon = styled.span<{ $active?: boolean }>`
  margin: 0.5em;
  color: ${(props) => (props.$active ? "#BF4F74": "blue")};
  width: 32px;
  height: 32px;

  border: none;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;