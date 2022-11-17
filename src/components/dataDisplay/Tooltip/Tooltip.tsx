import React, { FC, PropsWithChildren, ReactNode } from 'react';
import {
  StyledArrow,
  StyledContent,
  StyledPortal,
  StyledProvider,
  StyledRoot,
  StyledTrigger
} from './styles';

/* -------------------------------------------------------------------------------------------------
 * Tooltip
 * -----------------------------------------------------------------------------------------------*/

type TooltipProps = {
  content: ReactNode;
} & PropsWithChildren;

const Tooltip: FC<TooltipProps> = ({ children, content }) => {
  return (
    <StyledProvider>
      <StyledRoot>
        <StyledTrigger asChild>{children}</StyledTrigger>
        <StyledPortal>
          <StyledContent sideOffset={5}>
            {content}
            <StyledArrow />
          </StyledContent>
        </StyledPortal>
      </StyledRoot>
    </StyledProvider>
  );
};

export { Tooltip };

/* -----------------------------------------------------------------------------------------------*/
