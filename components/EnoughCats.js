import React from 'react';
import config from '../config';

class EnoughCats extends React.Component {
    render() {
        let cat = this.props.cat,
        isTooMany = cat >= config.tooManyThreshold,
        isTooFew = cat <= config.tooFewThreshold;

        if((isTooMany && isTooFew) || (!isTooMany && !isTooFew)) {
            return <b>That is enough cats</b>
        } else if (isTooMany) {
            return <b>That is too many cats</b> 
        } else if (isTooFew) {
            return <b>That is too few cats</b>
        }

        return <b>Your cats defy logic</b> 
    }
};

EnoughCats.propTypes = {
    cat: React.PropTypes.number.isRequired
};

export default EnoughCats;

