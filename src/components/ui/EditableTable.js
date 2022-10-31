import { Table, Form, Input } from "antd";
import { Button } from "reactstrap";
import "antd/dist/antd.less";

import { useEffect, useState } from "react";
function EditableTable() {
  const [dataSource, setDataSource] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    const data = [];
    for (let index = 0; index < 3; index++) {
      data.push({
        key: `${index}`,
        level: `level ${index}`,
        price: index * 200 + 100,
        minutes: `minutes ${index}`,
        friends: `${index}`,
      });
    }
    setDataSource(data);
  }, []);
  const columns = [
    {
      title: "Membership Level",
      dataIndex: "level",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item
              name="level"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input className="form-control" />
            </Form.Item>
          );
        } else {
          return <p className="">{text}</p>;
        }
      },
    },
    {
      title: "Membership Price",
      dataIndex: "price",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="price">
              <Input className="form-control" />
            </Form.Item>
          );
        } else {
          return <p className="">{text}</p>;
        }
      },
    },
    {
      title: "Video Chat Minutes",
      dataIndex: "minutes",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="minutes">
              <Input className="form-control" />
            </Form.Item>
          );
        } else {
          return <p className="">{text}</p>;
        }
      },
    },
    {
      title: "Number of Friends",
      dataIndex: "friends",
      render: (text, record) => {
        if (editingRow === record.key) {
          return (
            <Form.Item name="friends">
              <Input className="form-control" />
            </Form.Item>
          );
        } else {
          return <p className="">{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <div className="">
            <Button
              color="info"
              size="sm"
              className=""
              onClick={() => {
                setEditingRow(record.key);
                form.setFieldsValue({
                  level: record.level,
                  price: record.price,
                  minutes: record.minutes,
                  friends: record.friends,
                });
                setIsEditing(true);
              }}
            >
              <i class="bx bx-message-square-edit"></i> Edit
            </Button>
            <Button className="" color="primary" size="sm" type="submite">
              <i class="bx bx-file-blank"></i> Save
            </Button>
          </div>
        );
      },
    },
  ];
  const onFinish = (values) => {
    const updatedDataSource = [...dataSource];
    updatedDataSource.splice(editingRow, 1, { ...values, key: editingRow });
    setDataSource(updatedDataSource);
    setEditingRow(null);
    setIsEditing(false);
  };

  const addNewRow = () => {
    const newRow = {
      key: dataSource.length,
      level: "",
      price: 0,
      minutes: 0,
      friends: 0,
    };

    setDataSource((dataSource) => {
      return [...dataSource, newRow];
    });

    setEditingRow(newRow.key);
    form.setFieldsValue({
      level: newRow.level,
      price: newRow.price,
      minutes: newRow.minutes,
      friends: newRow.friends,
    });
    setIsEditing(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form form={form} onFinish={onFinish}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            className="table w-100 align-items-center table-flush mt-5"
          ></Table>
          <Button className="mx-4 mb-5" size="sm" onClick={addNewRow}>
            <i class="bx bx-plus-medical fs-1"></i> New Row
          </Button>
        </Form>
      </header>
    </div>
  );
}

export default EditableTable;
