import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';
import { BASE_TRIGGER_DESCRIPTION } from './base/EvolutionApiTrigger.base';
import { EvolutionApiTriggerV202502 } from './v202502/EvolutionApiTriggerV202502';

export class EvolutionApiTrigger extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			...BASE_TRIGGER_DESCRIPTION,
			defaultVersion: 202502,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			202502: new EvolutionApiTriggerV202502(),
		};

		super(nodeVersions, baseDescription);
	}
}
