import React from 'react';
import PrList from './PrList';
import { Tabs, Tab } from 'react-bootstrap';

class PrTabs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs defaultActiveKey="all_prs" id="uncontrolled-tab-example">
              <Tab eventKey="all_prs" title="All PR">
                <PrList PrData={this.props.pr_data} />
              </Tab>
              <Tab eventKey="prs_to_be_reviewed" title="Pending PRs To Be Reviewed By Me">
                <div>
                  Make a Component of Pending PRs To Be Reviewed By Me
                </div>
              </Tab>
              <Tab eventKey="prs_pending_for_review" title="My PRs Pending For Review With Others">
                <div>
                  Make a Component of My PRs Pending For Review With Others
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PrTabs;
