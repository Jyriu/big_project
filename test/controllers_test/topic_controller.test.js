const sinon = require('sinon');
const topicController = require('../controllers/topic_controller');
const Topic = require('../models/topic');

let expect;



describe('Topic Controller', function() {
    beforeEach(async function() {
        ({ expect } = await import('chai'));
    });
    describe('getTopics', function() {
        it('should get all topics and return status 200', async function() {
            const res = {
                status: function() { return this; },
                json: sinon.spy()
            };

            sinon.stub(Topic, 'findAll');
            Topic.findAll.returns(new Promise((resolve) => resolve([])));

            await topicController.getTopics({}, res);
            expect(res.json.calledOnce).to.be.true;

            Topic.findAll.restore();
        });
    });

    describe('createTopic', function() {
        it('should create a topic and return status 201', async function() {
            const req = {
                user: { id: 1 },
                body: { title: 'Test Topic' }
            };
            const res = {
                status: function() { return this; },
                json: sinon.spy()
            };

            sinon.stub(Topic, 'create');
            Topic.create.returns(new Promise((resolve) => resolve({ ...req.body, userId: req.user.id })));

            await topicController.createTopic(req, res);
            expect(res.json.calledOnce).to.be.true;

            Topic.create.restore();
        });
    });

    describe('getTopic', function() {
        it('should get a topic by id and return status 200 if topic exists', async function() {
            const req = {
                params: { id: 1 }
            };
            const res = {
                status: function() { return this; },
                json: sinon.spy()
            };

            sinon.stub(Topic, 'findById');
            Topic.findById.returns(new Promise((resolve) => resolve({ id: 1, title: 'Test Topic' })));

            await topicController.getTopic(req, res);
            expect(res.json.calledOnce).to.be.true;

            Topic.findById.restore();
        });

        it('should return status 404 if topic does not exist', async function() {
            const req = {
                params: { id: 1 }
            };
            const res = {
                status: function() { return this; },
                json: sinon.spy()
            };

            sinon.stub(Topic, 'findById');
            Topic.findById.returns(new Promise((resolve) => resolve(null)));

            await topicController.getTopic(req, res);
            expect(res.json.calledOnce).to.be.true;
            expect(res.json.firstCall.args[0]).to.deep.equal({ message: 'Topic not found' });

            Topic.findById.restore();
        });
    });
});