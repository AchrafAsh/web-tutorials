import React from 'react';
import classNames from 'classnames';
import { Container, Body, Title, Image, Button, Text } from './styles/Card';

export const Card = ({ classes, children, ...restProps }) => {
  return (
    <Container className={classNames('card', classes)} {...restProps}>
      {children}
    </Container>
  );
};

Card.Body = function CardBody({ classes, children, ...restProps }) {
  return (
    <Body className={classNames('card__body', classes)} {...restProps}>
      {children}
    </Body>
  );
};

Card.Title = function CardTitle({ classes, children, ...restProps }) {
  return (
    <Title className={classNames('card__title', classes)} {...restProps}>
      {children}
    </Title>
  );
};

Card.Text = function CardText({ classes, children, ...restProps }) {
  return (
    <Text className={classNames('card__text', classes)} {...restProps}>
      {children}
    </Text>
  );
};

Card.Image = function CardImage({ classes, src, alt, ...restProps }) {
  return (
    <Image
      className={classNames('card__image', classes)}
      src={src}
      alt={alt}
      {...restProps}
    />
  );
};

Card.Button = function CardButton({ classes, children, ...restProps }) {
  return (
    <Button
      type='button'
      className={classNames('card__button', classes)}
      {...restProps}
    >
      {children}
    </Button>
  );
};
