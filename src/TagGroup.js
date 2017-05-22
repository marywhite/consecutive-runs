import React, { Component } from 'react'
import { Tag, Tooltip, Button } from 'antd'

class TagGroup extends Component {

    remove = (index) => {
        const { removeTag } = this.props
        removeTag(index)
    }

    handleClear = (e) => {
        const { handleClear } = this.props
        e.preventDefault()
        handleClear()
    }

    render() {
        const { tags, matches } = this.props
        const isMatch = (index) => matches.includes(index)
        return (
            <div>
                <div className="tags-container">
                    {tags.map((tag, index) => {
                        const isLongTag = tag.length > 20
                        const tagElem = (
                            <Tag
                                color={isMatch(index) ? 'blue' : ''}
                                key={`${tag}-${index}`}
                                closable="true"
                                afterClose={() => this.remove(index)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        )
                        return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem
                    })}
                </div>
                <div>
                    {
                        tags.length > 0 ?
                            <Button
                                onClick={this.handleClear}
                                icon="delete"
                                type="dashed"
                                >
                                Clear
                            </Button> : <p>No Numbers Entered.</p>
                    }
                </div>
            </div>
        )
    }
}

export default TagGroup
