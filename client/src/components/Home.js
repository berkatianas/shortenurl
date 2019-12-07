import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { requesturl } from "../actions/url";
import { Button, Form, Badge } from "react-bootstrap";

const Home = ({ requesturl, url: { theurl, msg } }) => {
  const [formData, setFormData] = useState({
    longUrl: ""
  });
  const { longUrl } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    requesturl(longUrl);
  };

  return (
    <div>
      <p className="paragraphe">Réduisez la taille de vos liens</p>
      <h2 className="paragraphe">
        Coller l'URL que vous désirez réduire{" "}
        <Badge variant="secondary">Nouveau</Badge>
      </h2>
      <form onSubmit={e => onSubmit(e)}>
        <Form.Control
          type="text"
          name="longUrl"
          placeholder="tapez votre URL ici"
          value={longUrl}
          onChange={e => onChange(e)}
        />
        <Button type="submit" variant="primary">
          Raccourcir l'URL
        </Button>
      </form>
      <div className="result paragraphe">
        {theurl ? (
          <a
            className="final"
            href={theurl.shortUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {theurl.shortUrl}
          </a>
        ) : (
          <p className="final"> {msg}</p>
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  requesturl: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  url: state.url
});

export default connect(mapStateToProps, { requesturl })(Home);
