import React from 'react';
import { Input, Button } from 'antd';
import classNames from 'classnames';

const InputGroup = Input.Group;

export default function Search(props) {
  const btnCls = classNames({
    'ant-search-btn': true,
  });
  const searchCls = classNames({
    'ant-search-input': true,
  });

  const iconName = props.isLoading ? 'loading' : 'search';

  function handleSearch(e){
    e.preventDefault();
    const query = document.getElementById('queryCity').value;
    props.fetchWeather(query);
    document.getElementById('queryCity').value = '';
  }
  return (
    <div className="ant-search-input-wrapper" style={{ width: 200 }}>
      <InputGroup className={searchCls}>
        <Input id="queryCity" placeholder="Enter city Name" onPressEnter={handleSearch} />
        <div className="ant-input-group-wrap">
          <Button icon={iconName} className={btnCls} size="default" onClick={handleSearch} />
        </div>
      </InputGroup>
    </div>
  );
}

Search.propTypes = {
  fetchWeather: React.PropTypes.func,
  isLoading: React.PropTypes.bool,
};
