import { SectionHeader as BaseSectionHeader } from '../../src/components/components/ui/sectionHeader';
import { SectionHeaderProps as BaseSectionHeaderProps } from '../../src/components/components/ui/sectionHeader';

const SectionHeader: React.FC<BaseSectionHeaderProps> = (props) => {
    return <BaseSectionHeader {...props} />;
};

export default SectionHeader;
