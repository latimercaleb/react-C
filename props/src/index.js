import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
// This component is huge and bad design, refactor it
const NaiveApp = () => {
    return(
        <div className="ui container comments">
            <h1>Naive App: Unrefined</h1>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.fashion()}/>
                </a>
                <div className="content">
                    <a href="/" className="author"> Sett</a>
                    <div className="metadata">
                        <span className="date">Today at 3pm</span>
                    </div>
                    <div className="text">First post component</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.fashion()}/>
                </a>
                <div className="content">
                    <a href="/" className="author"> Sett</a>
                    <div className="metadata">
                        <span className="date">Today at 3pm</span>
                    </div>
                    <div className="text">First post component</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.fashion()}/>
                </a>
                <div className="content">
                    <a href="/" className="author"> Sett</a>
                    <div className="metadata">
                        <span className="date">Today at 3pm</span>
                    </div>
                    <div className="text">First post component</div>
                </div>
            </div>
            <hr />
        </div>
        
    );
};

const SmartApp = () => {
  return (
    <div className="ui container comments">
        <h1>Smart App: Refactored</h1>
        <ApprovalCard>
            <CommentDetail author="Sett" 
                           commentText="The boss is here!" 
                           avatar={faker.image.fashion()} 
                           timeOfPost="Today, at 2:52 PM"/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author="Ahri" 
                           commentText="Should I make your pulse rise? Or stop!?" 
                           avatar={faker.image.fashion()} 
                           timeOfPost="Yesterday, at 1:00 PM"/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author="Jhin" 
                           commentText="My... performance has begun!"
                           avatar={faker.image.fashion()} 
                           timeOfPost="Two Days ago, at 9:00 AM"/>
        </ApprovalCard>


        <ApprovalCard>
            <CommentDetail author="Jinx" 
                           commentText="I'm really getting bored" 
                           avatar={faker.image.fashion()} 
                           timeOfPost="One Week ago, 5:58 PM"/>            
        </ApprovalCard> 
    </div>
  );  
};
// ReactDOM.render(<NaiveApp />, document.querySelector('#root'));
ReactDOM.render(<SmartApp />, document.querySelector('#root'));