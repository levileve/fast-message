import MUUID from 'uuid-mongodb';
import moment from 'moment-timezone';

export default class DefaultModelRepository {
  constructor(model) { this.Model = model; }

  async create(modelData) {
    let response = null;

    try {
      response = this.Model.create({
        ...modelData,
        _id: MUUID.v4(),
      });

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  async selectOneRandom(where) {
    let response = null;

    try {
      [response] = await this.Model.aggregate([
        { $match: where },
        { $sample: { size: 1 } },
      ]);

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  async selectOne(where) {
    let response = null;

    try {
      response = await this.Model.findOne(where);

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  async selectManyWithCount(where, options) {
    let response = { count: 0, rows: [] };

    try {
      const [count, rows] = await Promise.all([
        this.Model.countDocuments(where),
        this.Model.find(where)
          .skip(options.offset)
          .limit(options.limit)
          .sort({ [options.orderBy]: options.isDESC }),
      ]);

      response = { count, rows };

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  async selectMany(where, options) {
    let response = null;

    try {
      if (options) {
        response = await this.Model.find(where)
          .skip(options.offset)
          .limit(options.limit);
      } else {
        response = await this.Model.find(where);
      }

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  async updateById(id, modelData) {
    let response = null;

    try {
      response = await this.Model.updateOne(
        { _id: id },
        {
          ...modelData,
        },
      );
    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }

  async deleteById(id) {
    let response = null;

    try {
      response = await this.Model.updateOne(
        { _id: id },
        {
          deleted_at: moment().toDate(),
        },
      );

    } catch (err) {
      throw new Error('persistence', err);
    }

    return response;
  }
}
