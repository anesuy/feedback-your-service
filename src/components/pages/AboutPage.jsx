import Card from "../shared/Card";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1> About This Project </h1>
        <p>This is a React app to leave feedback for a product or service</p>

        <p>
            <Link to="/">
                Back to Home
            </Link>
        </p>
      </div>
    </Card>
  );
}

//Browser Router actually uses the HTML5 history API
// to keep our user interface in sync with the URL

//Hash Router uses the hash portion off the URL to keep it in sync
//localhost......
//               /#about
//that's the hash portion
