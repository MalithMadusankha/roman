import {
  CardGroup,
  Card,
  CardBody,
  CardImg,
  Button,
  CardText,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export default function ImageCard(params) {
  return (
    <>
      <CardGroup>
        <Card className="mx-3 shadow">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Malith Madusankha</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              scince in 2022-05
            </CardSubtitle>
            <CardText>This is a wider card with supporting text below</CardText>
            <Button color="primary">Upgrade</Button>
          </CardBody>
        </Card>
        <Card className="mx-3 shadow">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Janith Madusankha</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              scince in 2022-05
            </CardSubtitle>
            <CardText>This is a wider card with supporting text below</CardText>
            <Button color="primary">Upgrade</Button>
          </CardBody>
        </Card>
        <Card className="mx-3 shadow">
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/318/180"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">Gota Rajapaksha</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              scince in 2022-05
            </CardSubtitle>
            <CardText>This is a wider card with supporting text below</CardText>
            <Button color="primary">Upgrade</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </>
  );
}
