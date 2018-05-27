package cn.jzyunqi.ms.<%= module_name %>.dao.jpa;

import cn.jzyunqi.common.persistence.dao.BaseDao;
import cn.jzyunqi.ms.<%= module_name %>.domain.<%= DomainName %>;

/**
 * @author wiiyaya
 * @date <%= currentDate %>
 */
public interface <%= DomainName %>Dao extends BaseDao<<%= DomainName %>, Long> {
}
