import "./card.css";

type CardProps = {
  title: string;
  body: string;
  values?: string[];
};

const Card = ({ title, body, values }: CardProps) => {
    return (
        <div key={title} className="you-card">
            <h2>{title}</h2>
            <p>{body}</p>
            {
                values && values.length > 0 &&
                    <ul>
                        {values.map((val: string) => (
                            <li key={val}>
                                {val}
                            </li>
                        ))}
                    </ul>
            }
          </div>
    );
};

export default Card;