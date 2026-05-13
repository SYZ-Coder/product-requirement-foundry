# Spec: {capability_name}

## ADDED Requirements

### Requirement: {new_requirement_name}

The system SHALL {new behavior}.

#### Scenario: {happy_path}

- GIVEN {context}
- WHEN {action}
- THEN {expected_result}

## MODIFIED Requirements

### Requirement: {existing_requirement_name}

The system SHALL {updated behavior while preserving compatible historical behavior}.

#### Scenario: {existing_behavior_preserved}

- GIVEN {existing context}
- WHEN {existing action}
- THEN {existing expected result remains valid}

#### Scenario: {new_behavior}

- GIVEN {new context}
- WHEN {new action}
- THEN {new expected result}

## REMOVED Requirements

### Requirement: {removed_requirement_name}

The system SHALL no longer {removed behavior}.

#### Scenario: {removed_behavior_handling}

- GIVEN {old context}
- WHEN {old action}
- THEN {replacement or error behavior}

## Notes

- Keep only sections that apply.
- For online 1-to-n changes, prefer `MODIFIED Requirements` unless the capability is truly new.
