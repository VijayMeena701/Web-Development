import React, { useState, useEffect } from "react";
import arrayOfData from "./data"; // data file containing json objects
import { FaAngleDoubleRight } from "react-icons/fa";
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
  section: {
      width: '90vw',
      margin: "5rem auto",
      maxWidth: '1170px',
      [theme.breakpoints.up('md')]:{
        width: '95vw',
      },
      '& h1,h2,h3,h4': {
        letterSpacing: '0.1rem',
        textTransform: 'capitalize',
        lineHeight: '1.25',
        marginBottom: '0.75rem',
      },
      '& h1': {
        fontSize: '3rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '4rem',
          lineHeight: 1,
        }
      },
      '& h2': {
        fontSize: '2rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '2.5rem',
          lineHeight: 1,
        }
      },
      '& h3': {
        fontSize: '1.25rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1.75rem',
          lineHeight: 1,
        }
      },
      '& h4': {
        fontSize: '0.875rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1rem',
          lineHeight: 1,
        }
      },
      '& p': {
        marginBottom: '1.25rem',
        color: '#617d98',
      },
      '& a': {
        textDecoration: 'none',
        color: '#044e53',
      }
    },
    underline: {
      width: '5rem',
      height: '0.25rem',
      marginBottom: '1.25rem',
      background: '#2caeba',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    loading: {
      textAlign: 'center',
    },
    title:{
      marginBottom: '4rem',
      textAlign: 'center',
    },
    eduCenter:{
      width: '80vw',
      margin: '0 auto',
      maxWidth: '1170px',
      [theme.breakpoints.up('md')]:{
        width: '90vw',
        display: 'grid',
        gridTemplateColumns: '200px 1fr',
        columnGap: '4rem',
      }
    },
    btnContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '4rem',
      flexWrap: 'wrap',
      [theme.breakpoints.up('md')]:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }
    },
    eduInfo: {
      '& h3': {
        fontWeight: '400',
      },
      '& h4': {
        textTransform: 'uppercase',
        color: '#617d98',
        background: '#dae2ec',
        display: 'inline-block',
        padding: '0.375rem 0.75rem',
        borderRadius: '0.25rem',
      },
      '& p': {
        letterSpacing: '0.1rem',
      }
    },
    eduDesc: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '2rem',
      alignItems: 'center',
      marginBottom: '1.25rem',
      '& p': {
        marginBottom: 0,
        color: '#324d67',
        letterSpacing: 0,
      }
    },
    eduDate: {
      letterSpacing: '0.1rem',
    },
    eduIcon: {
      color: '#2caeba',
    },
    eduBtn:{
      background: 'transparent',
      borderColor: 'transparent',
      textTransform : 'capitalize',
      fontSize: '1.25rem',
      letterSpacing: '0.1rem',
      margin: '0 0.5rem',
      transition: 'all 0.3s linear',
      cursor: 'pointer',
      padding: '0.25rem 0',
      lineHeight: '1',
      outlineColor: '#e0fcff',
      [theme.breakpoints.up('md')]:{
        marginBottom: '1rem',
      },
      '&:hover': {
        color: '#2caeba',
        boxShadow: '0 2px #2caeba',
        [theme.breakpoints.up('md')]:{
          boxShadow: '-2px 0 #2caeba',
        },
      }
    },
    activeBtn: {
      color: '#2caeba',
      boxShadow: '0 20x #2caeba',
      [theme.breakpoints.up('md')]:{
        boxShadow: '-2px 0 #2caeba',
      }
    },
    btn : {
      textTransform : 'uppercase',
      background: '#2caeba',
      color: '#bff8fd',
      padding: '0.375rem 0.75rem',
      letterSpacing: '0.1rem',
      fontWeight: '700',
      transition: 'all 0.3s linear',
      fontSize: '0.875rem',
      border: '2px solid transparent',
      cursor: 'pointer',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
      borderRadius: '0.25rem',
      display: 'block',
      width: '12rem',
      textAlign: 'center',
      margin : '0 auto',
      marginTop: '3rem',
      '& a' : {
        textDecoration: 'none',
        transition: 'all 0.3s linear',
        color: '#bff8fd',
      },
      '&:hover': {
        color: '#044e53',
        background: '#88ebf2',
        '& a': {
          color: '#044e53',
        }
      }
    }
});

function Education(props) {
  const [loading, setLoading] = useState(true);
  const [education, setEducation] = useState([]);
  const [value, setValue] = useState(0);
  const {classes} = props;
  const fetchData = async () => {
    const newEducation = arrayOfData; // fetch data here using url;
    setEducation(newEducation);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  var educationMarkup;

  if (!loading) {
    const { institute, dates, duties, title, link } = education[value];
    educationMarkup = (
      <section className={classes.section}>
        <div className={classes.title}>
          <h2>Education</h2>
          <div className={classes.underline}></div>
        </div>
        <div className={classes.eduCenter}>
          <div className={classes.btnContainer}>
            {education &&
              education.map((edu, index) => {
                return (
                  <button
                    key={edu.id}
                    onClick={() => setValue(index)}
                    className={`${classes.eduBtn} ${index === value && classes.activeBtn}`}
                  >
                    {edu.short}
                  </button>
                );
              })}
          </div>
          <article className={classes.eduInfo}>
            <h3>{title}</h3>
            <h4>{institute}</h4>
            <p className={classes.eduDate}>{dates}</p>
            {duties &&
              duties.map((duty, index) => {
                return (
                  <div className={classes.eduDesc} key={index}>
                    <FaAngleDoubleRight className={classes.eduIcon} />
                    <p>{duty}</p>
                  </div>
                );
              })}
          </article>
        </div>
        <button type="button" className={classes.btn}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link ? "more info" : "not available"}
          </a>
        </button>
      </section>
    );
  } else {
    educationMarkup = (
      <section className={`${classes.section} ${classes.loading}`}>
        <h2>Loading...</h2>
      </section>
    );
  }
  return educationMarkup;
};
Education.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Education);