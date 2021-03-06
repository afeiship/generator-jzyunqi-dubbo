package cn.jzyunqi.ms.<%= module_name %>.domain;

import cn.jzyunqi.common.persistence.domain.BaseDomain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author wiiyaya
 * @date <%= currentDate %>
 */
@Entity
@Table(name = "<%= table_name %>")
public class <%= DomainName %> extends BaseDomain<Long, Long> {
    private static final long serialVersionUID = <%= serialVersionUID() %>;
}
